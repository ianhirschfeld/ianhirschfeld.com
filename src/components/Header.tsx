import clsx from 'clsx';

import headshot from '../assets/Ian_Hirschfeld_Headshot.jpg';
import GitHubIcon from '../assets/icons/GithubIcon.svg?react';
import LinkedInIcon from '../assets/icons/LinkedinIcon.svg?react';
import { BLUE_BLOBS, CORNER, RED_BLOBS, TAN_BLOBS } from '../constants';
import Blob from './Blob';

function Header() {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* Blobs */}
      <div className="relative mx-auto size-[360px] max-sm:size-[300px]">
        <div className="absolute inset-0 -top-10 z-1">
          <Blob blobs={TAN_BLOBS} corner={CORNER.topRight} color="var(--color-brand-tan)" />
        </div>
        <div className="absolute inset-0 -bottom-2.5 -left-10 z-2">
          <Blob blobs={BLUE_BLOBS} corner={CORNER.bottomLeft} color="var(--color-brand-blue)" />
        </div>
        <div className="absolute inset-0 -right-7.5 -bottom-5 z-3">
          <Blob blobs={RED_BLOBS} corner={CORNER.bottomRight} color="var(--color-brand-red)" />
        </div>
      </div>

      <div className="w-full max-w-2xl rounded-2xl border-5 border-black bg-black shadow-2xl">
        {/* Top Row */}
        <div className="flex items-stretch gap-1">
          <div className="size-40 overflow-hidden rounded-md rounded-tl-xl border-2 border-white">
            <img src={headshot} alt="Ian Hirschfeld" className="size-full object-cover" />
          </div>
          <div className="font-rift flex flex-1 flex-col justify-center rounded-md rounded-tr-xl bg-white px-6 py-4">
            <h1 className="text-5xl font-bold text-black">Ian Hirschfeld</h1>
            <p className="font-rift text-2xl font-bold text-gray-500">
              Code &middot; Movies &middot; TTRPGs
            </p>
          </div>
        </div>
        {/* Bottom Row */}
        <div className="mt-1 flex items-stretch gap-1">
          <div className="bg-brand-red flex flex-1 rounded-md rounded-bl-xl">
            <div className="border-brand-red text-brand-red relative size-20 overflow-hidden rounded-tl-md rounded-bl-xl border bg-black p-1">
              <Hexagon className="absolute -top-1/8 -left-1/4 size-48">
                <Hexagon className="size-44">
                  <Hexagon className="size-40">
                    <Hexagon className="size-36">
                      <Hexagon className="size-32">
                        <Hexagon className="size-28">
                          <Hexagon className="size-24">
                            <Hexagon className="size-20">
                              <Hexagon className="size-16">
                                <Hexagon className="size-12" />
                              </Hexagon>
                            </Hexagon>
                          </Hexagon>
                        </Hexagon>
                      </Hexagon>
                    </Hexagon>
                  </Hexagon>
                </Hexagon>
              </Hexagon>
            </div>
            <div className="border-brand-red text-brand-red relative size-20 -scale-x-100 overflow-hidden border border-r-0 bg-black p-1">
              <WavyCircle className="absolute -top-1/4 -left-3/4 size-80">
                <WavyCircle className="size-75.5">
                  <WavyCircle className="size-71.5">
                    <WavyCircle className="size-67.5">
                      <WavyCircle className="size-63">
                        <WavyCircle className="size-59">
                          <WavyCircle className="size-55.5">
                            <WavyCircle className="size-51.5">
                              <WavyCircle className="size-48">
                                <WavyCircle className="size-45">
                                  <WavyCircle className="size-39">
                                    <WavyCircle className="size-35" />
                                  </WavyCircle>
                                </WavyCircle>
                              </WavyCircle>
                            </WavyCircle>
                          </WavyCircle>
                        </WavyCircle>
                      </WavyCircle>
                    </WavyCircle>
                  </WavyCircle>
                </WavyCircle>
              </WavyCircle>
            </div>
            <div className="border-brand-red relative mt-auto h-10 flex-1 overflow-hidden rounded-br-md border-r py-1">
              <div className="absolute bottom-[13px] left-0 h-0.5 w-full bg-black" />
              <div className="absolute bottom-[24px] left-0 h-0.5 w-full bg-black" />
            </div>
          </div>
          <div className="flex w-40 items-center justify-center gap-2 rounded-md rounded-br-xl bg-white py-5">
            <div className="bg-brand-blue size-10 rounded-full">
              <GitHubIcon className="size-full" />
            </div>
            <div className="bg-brand-blue size-10 rounded-full">
              <LinkedInIcon className="size-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WavyCircle({
  children,
  className,
  waves = 10,
  depth = 0.1,
  thickness = 2,
}: {
  children?: React.ReactNode;
  className?: string;
  waves?: number;
  depth?: number;
  thickness?: number;
}) {
  // Generate wavy circle path with smooth rounded bumps
  const generateWavyPath = () => {
    const cx = 50;
    const cy = 50;
    const baseRadius = 46;
    const waveDepth = baseRadius * depth;
    const points: string[] = [];
    const segmentsPerWave = 2;
    const totalSegments = waves * segmentsPerWave;

    // Generate points alternating between outer and inner radius
    const allPoints: { x: number; y: number; angle: number }[] = [];
    for (let i = 0; i < totalSegments; i++) {
      const angle = (i / totalSegments) * 2 * Math.PI;
      const isOuter = i % 2 === 0;
      const r = isOuter ? baseRadius : baseRadius - waveDepth;
      allPoints.push({
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
        angle,
      });
    }

    // Start at the first point
    points.push(`M ${allPoints[0].x} ${allPoints[0].y}`);

    // Create smooth curves through all points using cubic beziers
    for (let i = 0; i < totalSegments; i++) {
      const p0 = allPoints[(i - 1 + totalSegments) % totalSegments];
      const p1 = allPoints[i];
      const p2 = allPoints[(i + 1) % totalSegments];
      const p3 = allPoints[(i + 2) % totalSegments];

      // Catmull-Rom to Bezier conversion for smooth curves
      const tension = 0.4;
      const cp1x = p1.x + ((p2.x - p0.x) * tension) / 2;
      const cp1y = p1.y + ((p2.y - p0.y) * tension) / 2;
      const cp2x = p2.x - ((p3.x - p1.x) * tension) / 2;
      const cp2y = p2.y - ((p3.y - p1.y) * tension) / 2;

      points.push(`C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${p2.x} ${p2.y}`);
    }

    return points.join(' ');
  };

  return (
    <div className={clsx('relative flex items-center justify-center', className)}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
        <path
          d={generateWavyPath()}
          fill="none"
          stroke="currentColor"
          strokeWidth={thickness}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {children}
    </div>
  );
}

function Hexagon({
  children,
  className,
  thickness = 2,
  rotation = 0,
}: {
  children?: React.ReactNode;
  className?: string;
  thickness?: number;
  rotation?: number;
}) {
  // Generate hexagon path
  const generateHexPath = () => {
    const cx = 50;
    const cy = 50;
    const radius = 46;
    const sides = 6;
    const points: string[] = [];

    for (let i = 0; i < sides; i++) {
      const angle = (i / sides) * 2 * Math.PI - Math.PI / 2 + (rotation * Math.PI) / 180;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      points.push(`${x},${y}`);
    }

    return `M ${points.join(' L ')} Z`;
  };

  return (
    <div className={clsx('relative flex items-center justify-center', className)}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
        <path
          d={generateHexPath()}
          fill="none"
          stroke="currentColor"
          strokeWidth={thickness}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {children}
    </div>
  );
}

export default Header;
