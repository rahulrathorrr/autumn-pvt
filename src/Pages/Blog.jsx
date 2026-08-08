import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, CheckCircle2, X } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const categories = ['All', 'Engineering', 'Product Strategy', 'Architecture', 'Industry Insights', 'Company News'];

  const blogPosts = [
    {
      id: 1,
      category: 'Product Strategy',
      title: 'Why 85% of Enterprise Software Projects Fail - and How to Be in the 15%',
      excerpt: 'A data-driven analysis of the most common failure modes in enterprise software adoption, and the playbook Autumn Technologies uses to ensure success and maximize return on investment.',
      tags: ['#Strategy', '#Enterprise', '#ROI'],
      author: 'Autumn Strategy'
    },
    {
      id: 2,
      category: 'Engineering',
      title: 'How Modern Architecture is Replacing Legacy Systems Without Losing Stability',
      excerpt: 'Our deep dive into the architecture behind robust, scalable software systems that handle high-volume enterprise traffic with zero downtime and seamless performance.',
      tags: ['#Architecture', '#Automation', '#Cloud'],
      author: 'Autumn Engineering Team'
    },
    {
      id: 3,
      category: 'Architecture',
      title: 'Building Scalable Infrastructure: A Deep Dive into Microservices',
      excerpt: 'A behind-the-scenes look at how we build and deploy microservices architectures to revolutionize enterprise content delivery and management on a global scale.',
      tags: ['#Infrastructure', '#Scale', '#DevOps'],
      author: 'Autumn Delivery'
    },
    {
      id: 4,
      category: 'Industry Insights',
      title: 'The Future of Web Development: What It Means for Your Product',
      excerpt: 'A practical roadmap for product teams navigating the fast-paced world of modern frontend and backend frameworks to maintain a competitive edge in the digital landscape.',
      tags: ['#WebDev', '#Trends', '#Product'],
      author: 'Autumn Insights'
    },
    {
      id: 5,
      category: 'Company News',
      title: 'Autumn Technologies: Our Journey, Our Vision, and What\'s Next',
      excerpt: 'A letter from our founders on why we started Autumn Technologies, the problems we\'re solving, and the ambitious roadmap ahead of us for the coming years.',
      tags: ['#Vision', '#Founders', '#Startup'],
      author: 'Founding Team'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setShowPopup(true);
      setEmail('');
      // Auto-hide popup after 3 seconds
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-[#050505] text-white w-full min-h-screen pt-20 font-sans selection:bg-[#3b82f6] selection:text-white">
      
      {/* 1. HERO & SEARCH SECTION */}
      <section className="relative py-20 px-4 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full">
          <div className="inline-flex items-center gap-2 border border-[#1e3a8a]/50 bg-[#0f172a]/50 text-[#3b82f6] text-xs font-medium px-4 py-1.5 rounded-full mb-8">
            Autumn Tech Blog
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Insights on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]">Software Engineering</span> <br />
            & Strategy
          </h1>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Deep dives, practical guides, and honest perspectives from the team building digital solutions for real businesses.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111111] border border-white/10 text-white rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#3b82f6] transition-colors"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-center gap-2 min-w-max pb-4 border-b border-white/5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-[#3b82f6] text-white' 
                  : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* 3. BLOG GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24 min-h-[400px]">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#0f1115] border border-white/5 rounded-3xl p-6 hover:border-white/20 transition-all flex flex-col h-full cursor-pointer group"
              >
                <div className="flex justify-start items-center mb-6">
                  <span className="bg-[#1e3a8a]/30 text-[#3b82f6] text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#3b82f6] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[#3b82f6]/70 bg-[#3b82f6]/10 text-xs px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/5 text-gray-500 text-xs">
                  <span className="flex items-center gap-1.5 font-medium">
                    <User className="w-4 h-4" /> {post.author}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            No articles found matching your criteria.
          </div>
        )}
      </section>

      {/* 4. NEWSLETTER SUBSCRIPTION */}
      <section className="py-24 px-4 border-t border-white/5 bg-[#0a0d14] relative">
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <span className="text-[#a3e635] text-xs font-bold tracking-widest uppercase mb-4 block">Stay Updated</span>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Get Tech Insights Delivered Weekly</h2>
          <p className="text-gray-400 text-lg mb-10">
            Join our growing community of engineering leaders who get our weekly digest of practical software strategies, technical deep-dives, and industry analysis.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4">
            <input 
              type="email" 
              placeholder="your@email.com" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-[#111111] border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#3b82f6] transition-colors"
            />
            <button 
              type="submit"
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-8 py-3.5 rounded-xl transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-xs">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* 5. SUCCESS POPUP / MODAL */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#111111] border border-white/10 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-16 h-16 bg-[#1a2e05] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#a3e635]" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Subscribed!</h3>
              <p className="text-gray-400 text-sm">
                Thank you for joining. Our latest tech insights will be sent to your inbox soon.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Blog;