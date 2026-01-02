import clsx from 'clsx';

import headshot from '../assets/Ian_Hirschfeld_Headshot.jpg';
import { BLUE_BLOBS, CORNER, RED_BLOBS, SOCIAL_LINKS, TAN_BLOBS } from '../constants';
import Blob from './Blob';
import SocialLink from './SocialLink';

function Header() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Blobs */}
      <div className="absolute top-1/2 z-0 size-150 -translate-y-1/2">
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

      <div className="relative z-10 w-full max-w-2xl rounded-2xl border-5 border-black bg-black">
        {/* Top Row */}
        <div className={clsx('flex flex-col-reverse items-stretch gap-1', 'sm:flex-row')}>
          <div
            className={clsx(
              'mx-auto size-75 overflow-hidden rounded-md border border-white bg-white',
              'sm:mx-0 sm:size-40 sm:rounded-md sm:rounded-tl-xl'
            )}
          >
            <img
              src={headshot}
              alt="Ian Hirschfeld"
              className={clsx(
                'size-full rounded-md object-cover',
                'sm:rounded-md sm:rounded-tl-xl'
              )}
            />
          </div>
          <div
            className={clsx(
              'font-rift flex flex-1 flex-col justify-center rounded-md rounded-t-xl bg-white p-4 text-center',
              'sm:rounded-md sm:rounded-tr-xl sm:px-6 sm:text-left'
            )}
          >
            <h1 className={clsx('text-5xl font-bold', 'sm:text-6xl')}>Ian Hirschfeld</h1>
            <p className={clsx('text-2xl font-semibold text-slate-500', 'sm:text-3xl')}>
              Code &middot; Movies &middot; TTRPGs
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className={clsx('mt-1 flex flex-col items-stretch gap-1', 'sm:flex-row')}>
          <div
            className={clsx(
              'bg-brand-red flex flex-1 rounded-md',
              'sm:rounded-md sm:rounded-bl-xl'
            )}
          >
            <div
              className={clsx(
                'border-brand-red text-brand-red relative size-20 overflow-hidden rounded-l-md border bg-black p-1',
                'sm:rounded-tl-md sm:rounded-bl-xl'
              )}
            >
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
            <div className="border-brand-red text-brand-red relative h-20 w-30 -scale-x-100 overflow-hidden border border-r-0 bg-black p-1">
              <WavyCircle className="absolute -top-1/4 -left-3/4 size-80">
                <WavyCircle className="size-75.5">
                  <WavyCircle className="size-71.5">
                    <WavyCircle className="size-68">
                      <WavyCircle className="size-64">
                        <WavyCircle className="size-60.5">
                          <WavyCircle className="size-57">
                            <WavyCircle className="size-54">
                              <WavyCircle className="size-51">
                                <WavyCircle className="size-48" />
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
              <div className="absolute bottom-[36px] left-0 h-0.5 w-full bg-black" />
              <div className="absolute bottom-[29px] left-0 h-0.5 w-full bg-black" />
              <div className="absolute bottom-[22px] left-0 h-0.5 w-full bg-black" />
              <div className="absolute bottom-[16px] left-0 h-0.5 w-full bg-black" />
              <div className="absolute bottom-[10px] left-0 h-0.5 w-full bg-black" />
              <div className="absolute bottom-[4px] left-0 h-0.5 w-full bg-black" />
            </div>
          </div>

          {/* Socials */}
          <div
            className={clsx(
              'flex w-full items-center justify-center gap-7 rounded-t-md rounded-b-xl bg-white py-5',
              'sm:w-40 sm:justify-evenly sm:gap-0 sm:rounded-md sm:rounded-br-xl'
            )}
          >
            <SocialLink link={SOCIAL_LINKS.linkedin} />
            <SocialLink link={SOCIAL_LINKS.github} />
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
