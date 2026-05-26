'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

type AvatarState = 'idle' | 'wave' | 'talk';

interface SpriteAvatarProps {
  /** True while the AI is streaming a response */
  isTalking: boolean;
  /** Whether the chat panel is currently open */
  isOpen: boolean;
  /** Toggle the chat open/closed */
  onClick: () => void;
  className?: string;
}

const WAVE_DURATION_MS = 3000;
const INITIAL_WAVE_DELAY_MS = 2000;
const REPEAT_WAVE_INTERVAL_MS = 15000;

const SpriteAvatar: React.FC<SpriteAvatarProps> = ({
  isTalking,
  isOpen,
  onClick,
  className,
}) => {
  const [avatarState, setAvatarState] = useState<AvatarState>('idle');
  const [showBubble, setShowBubble] = useState(false);

  // Refs to read current values inside timer callbacks without stale closures
  const isTalkingRef = useRef(isTalking);
  const isOpenRef = useRef(isOpen);
  const waveReturnTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    isTalkingRef.current = isTalking;
  }, [isTalking]);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  /** Starts the wave → idle sequence if conditions allow */
  const triggerWave = () => {
    if (isTalkingRef.current || isOpenRef.current) return;
    setAvatarState('wave');
    setShowBubble(true);
    waveReturnTimer.current = setTimeout(() => {
      setAvatarState('idle');
      setShowBubble(false);
    }, WAVE_DURATION_MS);
  };

  // Initial wave after mount + periodic repeat
  useEffect(() => {
    const initialTimer = setTimeout(triggerWave, INITIAL_WAVE_DELAY_MS);
    const repeatInterval = setInterval(triggerWave, REPEAT_WAVE_INTERVAL_MS);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(repeatInterval);
      if (waveReturnTimer.current) clearTimeout(waveReturnTimer.current);
    };
  }, []);  

  // Sync talk state with AI streaming
  useEffect(() => {
    if (isTalking) {
      // Interrupt any wave in progress
      if (waveReturnTimer.current) clearTimeout(waveReturnTimer.current);
      setAvatarState('talk');
      setShowBubble(false);
    } else {
      setAvatarState('idle');
    }
  }, [isTalking]);

  // Hide bubble when chat opens
  useEffect(() => {
    if (isOpen) {
      setShowBubble(false);
      if (!isTalkingRef.current) setAvatarState('idle');
    }
  }, [isOpen]);

  return (
    <div
      className={cn(
        'group relative flex cursor-pointer flex-col items-center select-none',
        className,
      )}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      role="button"
      tabIndex={0}
      aria-label={isOpen ? 'Close chat' : 'Chat with Dilpreet'}
    >
      {/* Speech bubble — only shown when chat is closed */}
      {showBubble && !isOpen && (
        <div
          className={cn(
            'animate-in fade-in slide-in-from-bottom-2 duration-200',
            'absolute -top-14 right-0',
            'bg-background rounded-xl border whitespace-nowrap',
            'px-3 py-2 text-xs font-medium shadow-lg',
          )}
        >
          Hi! Ask me anything 👋
          {/* Pixel-art-style bubble tail */}
          <div className="bg-background absolute right-6 -bottom-[6px] h-3 w-3 rotate-45 border-r border-b" />
        </div>
      )}

      {/* Sprite — CSS animation driven by class name */}
      <div
        className={cn(
          'sprite-avatar',
          `sprite-${avatarState}`,
          'transition-transform duration-150 group-hover:scale-110 group-active:scale-95',
        )}
      />
    </div>
  );
};

export default SpriteAvatar;
