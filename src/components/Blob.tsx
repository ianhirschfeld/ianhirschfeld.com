import clsx from 'clsx';
import { useCallback, useEffect, useRef } from 'react';

import { CORNER, type Corner } from '~/constants';

const SPEED = 10000;

const randomIntBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

interface BlobProps {
  blobs: string[];
  corner: Corner;
  color: string;
  className?: string;
  deltaMin?: number;
  deltaMax?: number;
}

function Blob({
  blobs,
  corner: initialCorner,
  color,
  className,
  deltaMin = 0,
  deltaMax = 10,
}: BlobProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const cornerRef = useRef<Corner>(initialCorner);

  const randomCorner = useCallback((): Corner => {
    const corners = Object.values(CORNER);
    return corners[randomIntBetween(0, corners.length - 1)];
  }, []);

  const getNewCorner = useCallback(() => {
    let newCorner = randomCorner();
    while (newCorner === cornerRef.current) {
      newCorner = randomCorner();
    }
    cornerRef.current = newCorner;
  }, [randomCorner]);

  const getNewTransform = useCallback(() => {
    let x = 0;
    let y = 0;

    switch (cornerRef.current) {
      case CORNER.topLeft:
        x = randomIntBetween(deltaMin, deltaMax) * -1;
        y = randomIntBetween(deltaMin, deltaMax) * -1;
        break;

      case CORNER.topRight:
        x = randomIntBetween(deltaMin, deltaMax) * -1;
        y = randomIntBetween(deltaMin, deltaMax);
        break;

      case CORNER.bottomLeft:
        x = randomIntBetween(deltaMin, deltaMax);
        y = randomIntBetween(deltaMin, deltaMax) * -1;
        break;

      case CORNER.bottomRight:
        x = randomIntBetween(deltaMin, deltaMax);
        y = randomIntBetween(deltaMin, deltaMax);
        break;

      default:
        x = 0;
        y = 0;
        break;
    }

    return `translate(${x}px, ${y}px)`;
  }, [deltaMin, deltaMax]);

  const randomBlob = useCallback(() => {
    return blobs[randomIntBetween(0, blobs.length - 1)];
  }, [blobs]);

  const updateBlob = useCallback(() => {
    const blobEl = containerRef.current;
    const pathEl = pathRef.current;
    if (!blobEl || !pathEl) return;

    const currentBlob = pathEl.getAttribute('d');
    let newBlob = randomBlob();
    while (newBlob === currentBlob) {
      newBlob = randomBlob();
    }

    getNewCorner();
    blobEl.style.transform = getNewTransform();
    pathEl.setAttribute('d', newBlob);
  }, [randomBlob, getNewCorner, getNewTransform]);

  useEffect(() => {
    const timeout = setTimeout(() => updateBlob(), 0);
    const timer = setInterval(() => updateBlob(), SPEED);

    return () => {
      clearTimeout(timeout);
      clearInterval(timer);
    };
  }, [updateBlob]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        'absolute size-full opacity-70 transition-transform duration-10000 ease-linear',
        className
      )}
    >
      <svg style={{ fill: color }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          ref={pathRef}
          d={blobs[0]}
          transform="translate(100 100)"
          className="transition-[d] duration-10000 ease-linear"
        />
      </svg>
    </div>
  );
}

export default Blob;
