'use client';

import { useState, useRef, KeyboardEvent, ClipboardEvent } from 'react';

interface OTPInputProps {
  length?: number;
  onComplete: (code: string) => void;
}

export default function OTPInput({ length = 6, onComplete }: OTPInputProps) {
  const [values, setValues] = useState<string[]>(new Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value.slice(-1);
    setValues(newValues);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    const code = newValues.join('');
    if (code.length === length) {
      onComplete(code);
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    const newValues = [...values];
    paste.split('').forEach((char, i) => {
      newValues[i] = char;
    });
    setValues(newValues);
    if (paste.length === length) {
      onComplete(paste);
    } else {
      inputRefs.current[paste.length]?.focus();
    }
  };

  return (
    <div className="flex gap-3 justify-center">
      {values.map((value, index) => (
        <input
          key={index}
          ref={(el) => { inputRefs.current[index] = el; }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-12 h-14 text-center text-xl font-semibold bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 hover:border-white/20 transition-all duration-300"
          aria-label={`OTP digit ${index + 1}`}
        />
      ))}
    </div>
  );
}
