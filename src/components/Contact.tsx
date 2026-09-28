import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  X,
  Copy,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { usePortfolioData } from '../context/PortfolioDataContext';

export const Contact: React.FC = () => {
  const { data, activePage } = usePortfolioData();
  const { personal } = data;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const gleFormData = new URLSearchParams();

    gleFormData.append('entry.798528265', formData.name);
    gleFormData.append('entry.1369087187', formData.email);
    gleFormData.append('entry.829283960', formData.subject);
    gleFormData.append('entry.874851939', formData.message);

    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSdqUeKRpWIHYAhQBSH1-F0hKdlvLOXuDlyJWbakSC74x3BtPA/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          body: gleFormData,
        }
      );
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section
      id="contact"
      className={`py-10 sm:py-16 bg-slate-50 dark:bg-slate-950/90 ${
        activePage === 'contact' ? '' : 'border-t border-slate-200 dark:border-slate-800/80'
      } transition-colors duration-200`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
            <Mail className="h-3.5 w-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Build Reliable Systems Together
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Open for senior backend engineering positions, cloud architecture consultations, and technical collaborations. Reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6 text-left">

            {/* Contact Information Card */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-7 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email Item with Copy Button */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-mono">Email Address</span>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 truncate block"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Phone Item with Copy Button */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-mono">Phone / WhatsApp</span>
                      <a
                        href={`tel:${personal.phone}`}
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 truncate block"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyPhone}
                    className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-mono">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white block">
                      {personal.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Profiles:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    title="GitHub"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={personal.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    title="Twitter / X"
                  >
                    <TwitterIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-left">
              <span className="text-xs font-bold text-cyan-800 dark:text-cyan-300 flex items-center gap-1.5 mb-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Current Availability
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Available for Senior Backend Engineering roles, Distributed Solutions Architecture, and High-Throughput Microservice Consultations.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7 text-left">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
              </div>

              {submitted ? (
                submitError ? (
                  <div className="p-6 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-500/30 text-red-800 dark:text-red-300 text-center">
                    <X className="h-8 w-8 mx-auto mb-2 text-red-600 dark:text-red-400" />
                    <h4 className="text-base font-bold mb-1">
                      Failed to send your message.
                    </h4>
                    <p className="text-xs leading-relaxed max-w-md mx-auto text-red-700 dark:text-red-400">
                      Something went wrong while submitting your message. Please check your details and try again. If the problem persists, you can contact me directly by email.
                    </p>
                  </div>
                ) : (
                  <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-center animate-in fade-in">
                    <Check className="h-8 w-8 mx-auto mb-2 text-emerald-600 dark:text-emerald-400" />
                    <h4 className="text-base font-bold mb-1">Message submitted successfully.</h4>
                    <p className="text-xs leading-relaxed max-w-md mx-auto text-emerald-700 dark:text-emerald-400">
                      Thank you for reaching out! Your message has been received. I will review your query and get back to you at {formData.email || 'your email'} as soon as possible.
                    </p>
                  </div>
                )
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Miller"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Distributed Backend Architecture / Engineering Role"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, or engineering inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold text-xs sm:text-sm hover:bg-cyan-700 dark:hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md shadow-cyan-600/20"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
