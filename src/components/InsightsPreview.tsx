import React from 'react';
import { LEGAL_INSIGHTS } from '../data/firmData';
import { ArrowRight, Clock } from 'lucide-react';

interface InsightsPreviewProps {
  onNavigate: (href: string) => void;
}

export const InsightsPreview: React.FC<InsightsPreviewProps> = ({ onNavigate }) => {
  return (
    <section
      id="insights-preview"
      className="py-20 sm:py-24 bg-[#F7F5F0] text-[#17202A] relative border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
              LEGAL INSIGHTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071A2B] tracking-tight">
              Perspectives for Business Leaders.
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="/insights"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/insights');
              }}
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#071A2B] hover:text-[#C99A4A] transition-colors group"
            >
              <span>View All Insights</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C99A4A] transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 3 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {LEGAL_INSIGHTS.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-[#17202A]/10 hover:border-[#C99A4A] p-7 sm:p-8 flex flex-col justify-between transition-all group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-[#17202A]/60 mb-4">
                  <span className="px-2 py-0.5 bg-[#F1F2F3] text-[#071A2B] font-bold uppercase tracking-wider text-[10px] border border-[#071A2B]/10">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-black/50">
                    <Clock className="w-3 h-3 text-[#C99A4A]" />
                    {article.readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="font-serif text-xl font-bold text-[#071A2B] group-hover:text-[#C99A4A] transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                {/* Short Excerpt */}
                <p className="text-xs sm:text-sm text-[#17202A]/70 font-sans leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Insight Link */}
              <div className="mt-8 pt-4 border-t border-[#17202A]/10">
                <a
                  href={article.link}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(article.link);
                  }}
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#071A2B] group-hover:text-[#C99A4A] transition-colors"
                >
                  <span>Read Insight</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C99A4A] transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
