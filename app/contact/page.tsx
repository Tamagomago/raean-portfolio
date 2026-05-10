'use client';

import React, { useState } from 'react';
import PageLayout from '@/app/components/layout/page-layout';
import { Title, Text } from '@/app/components/ui';

const ContactPage = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const description =
    "Let's try working together!\nFeel free to reach out for collaborations, projects, or just to say hi.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:tamayoraeanchrissean@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(message)}`;
  };

  return (
    <PageLayout>
      <div className="flex w-full max-w-2xl flex-col items-center justify-center px-6 py-24 md:py-40">
        <div className="flex flex-col items-center text-center">
          <Title distortIntervalMs={2000} className="text-[50px] leading-tight md:text-[100px]">
            WORK_WITH_ME
          </Title>
          <div className="mt-8 flex flex-col items-center gap-1">
            {description.split('\n').map((sentence, i) => (
              <Text
                key={i}
                font="font-geist-mono"
                className="text-xs md:text-sm"
                align="center"
                stagger={10}
              >
                {sentence}
              </Text>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-20 flex w-full flex-col gap-10">
          <div className="flex flex-col gap-3">
            <label className="font-geist-mono text-[10px] tracking-[0.3em] text-white uppercase">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="font-geist-mono w-full border-b border-dashed border-white/70 bg-transparent py-3 text-sm text-white transition-colors outline-none focus:border-white"
              placeholder="PROJECT / INQUIRY"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-geist-mono text-[10px] tracking-[0.3em] text-white uppercase">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="font-geist-mono aspect-square w-full border border-dashed border-white/70 bg-transparent p-6 text-sm text-white transition-colors outline-none focus:border-white md:max-h-[500px]"
              placeholder="TELL ME MORE..."
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="group relative flex w-fit items-center justify-center bg-white px-4 py-2 transition-all duration-300 hover:bg-black"
            >
              <Text
                className="font-geist-mono text-sm! font-bold tracking-widest! text-black uppercase group-hover:text-white"
                duration={400}
              >
                send
              </Text>
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
