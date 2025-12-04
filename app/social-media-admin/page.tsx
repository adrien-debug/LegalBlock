"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeftIcon, 
  ArrowRightIcon,
  TrendingUpIcon,
  ChartIcon,
  SparklesIcon2,
  ClockIcon,
  CheckIcon
} from "@/components/icons/GeneralIcons";

// Social Media Icons
function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function TikTokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

function TwitterIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  );
}

function CalendarIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function HashtagIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
    </svg>
  );
}

function PlayIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PlusIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  );
}

function TrashIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );
}

function EditIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );
}

interface ScheduledPost {
  id: string;
  platform: "instagram" | "tiktok" | "twitter";
  content: string;
  scheduledDate: string;
  scheduledTime: string;
  status: "scheduled" | "published" | "failed";
  engagement?: {
    likes: number;
    comments: number;
    shares: number;
    views: number;
  };
}

interface AnalyticsData {
  platform: "instagram" | "tiktok" | "twitter";
  followers: number;
  engagement: number;
  reach: number;
  impressions: number;
  growth: number;
}

const mockScheduledPosts: ScheduledPost[] = [
  {
    id: "1",
    platform: "instagram",
    content: "🚀 Introducing BlockBank's revolutionary RWA tokenization platform! Transform your assets into digital tokens. #BlockBank #Tokenization #RWA",
    scheduledDate: "2024-01-15",
    scheduledTime: "10:00",
    status: "scheduled",
  },
  {
    id: "2",
    platform: "tiktok",
    content: "Watch how we tokenize real estate assets in 60 seconds! 💎 #Crypto #Tokenization #RealEstate",
    scheduledDate: "2024-01-15",
    scheduledTime: "14:00",
    status: "scheduled",
  },
  {
    id: "3",
    platform: "twitter",
    content: "Breaking: BlockBank launches new SPV structure for asset tokenization. Learn more at blockbank.com #Web3 #DeFi",
    scheduledDate: "2024-01-16",
    scheduledTime: "09:00",
    status: "scheduled",
  },
];

const mockAnalytics: AnalyticsData[] = [
  {
    platform: "instagram",
    followers: 12500,
    engagement: 8.5,
    reach: 45000,
    impressions: 125000,
    growth: 12.3,
  },
  {
    platform: "tiktok",
    followers: 8900,
    engagement: 15.2,
    reach: 67000,
    impressions: 234000,
    growth: 28.7,
  },
  {
    platform: "twitter",
    followers: 15200,
    engagement: 6.8,
    reach: 38000,
    impressions: 98000,
    growth: 9.4,
  },
];

const hookPhrases = [
  "Transform your assets into digital tokens",
  "Revolutionary RWA tokenization platform",
  "The future of asset ownership is here",
  "Unlock liquidity with blockchain technology",
  "From physical assets to digital tokens",
  "Secure, transparent, and efficient tokenization",
  "Join the tokenization revolution",
  "Your assets, tokenized and ready",
];

export default function SocialMediaAdminPage() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "calendar" | "content" | "analytics" | "automation">("dashboard");
  const [selectedPlatform, setSelectedPlatform] = useState<"all" | "instagram" | "tiktok" | "twitter">("all");
  const [scheduledPosts, setScheduledPosts] = useState<ScheduledPost[]>(mockScheduledPosts);
  const [newPost, setNewPost] = useState({
    platform: "instagram" as "instagram" | "tiktok" | "twitter",
    content: "",
    scheduledDate: "",
    scheduledTime: "",
  });
  const [generatedHook, setGeneratedHook] = useState("");

  const generateHook = () => {
    const randomHook = hookPhrases[Math.floor(Math.random() * hookPhrases.length)];
    setGeneratedHook(randomHook);
    setNewPost({ ...newPost, content: randomHook });
  };

  const addScheduledPost = () => {
    if (newPost.content && newPost.scheduledDate && newPost.scheduledTime) {
      const post: ScheduledPost = {
        id: Date.now().toString(),
        platform: newPost.platform,
        content: newPost.content,
        scheduledDate: newPost.scheduledDate,
        scheduledTime: newPost.scheduledTime,
        status: "scheduled",
      };
      setScheduledPosts([...scheduledPosts, post]);
      setNewPost({
        platform: "instagram",
        content: "",
        scheduledDate: "",
        scheduledTime: "",
      });
      setGeneratedHook("");
    }
  };

  const deletePost = (id: string) => {
    setScheduledPosts(scheduledPosts.filter((post) => post.id !== id));
  };

  const filteredPosts = selectedPlatform === "all" 
    ? scheduledPosts 
    : scheduledPosts.filter((post) => post.platform === selectedPlatform);

  const platformIcons = {
    instagram: InstagramIcon,
    tiktok: TikTokIcon,
    twitter: TwitterIcon,
  };

  const platformColors = {
    instagram: "from-pink-500 via-red-500 to-yellow-500",
    tiktok: "from-black to-gray-800",
    twitter: "from-blue-400 to-blue-600",
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
        <div className="mb-6 flex items-center space-x-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
            <SparklesIcon2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Social Media Admin
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Manage, schedule, and analyze your social media presence
            </p>
          </div>
        </div>
      </div>

      {/* Platform Selector */}
      <div className="mb-6 flex flex-wrap gap-3">
        <button
          onClick={() => setSelectedPlatform("all")}
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
            selectedPlatform === "all"
              ? "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg"
              : "bg-white/80 text-slate-700 hover:bg-violet-50 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-violet-900/20"
          }`}
        >
          All Platforms
        </button>
        <button
          onClick={() => setSelectedPlatform("instagram")}
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all flex items-center space-x-2 ${
            selectedPlatform === "instagram"
              ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white shadow-lg"
              : "bg-white/80 text-slate-700 hover:bg-pink-50 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-pink-900/20"
          }`}
        >
          <InstagramIcon className="h-4 w-4" />
          <span>Instagram</span>
        </button>
        <button
          onClick={() => setSelectedPlatform("tiktok")}
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all flex items-center space-x-2 ${
            selectedPlatform === "tiktok"
              ? "bg-gradient-to-r from-black to-gray-800 text-white shadow-lg"
              : "bg-white/80 text-slate-700 hover:bg-gray-50 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-gray-900/20"
          }`}
        >
          <TikTokIcon className="h-4 w-4" />
          <span>TikTok</span>
        </button>
        <button
          onClick={() => setSelectedPlatform("twitter")}
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all flex items-center space-x-2 ${
            selectedPlatform === "twitter"
              ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg"
              : "bg-white/80 text-slate-700 hover:bg-blue-50 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-blue-900/20"
          }`}
        >
          <TwitterIcon className="h-4 w-4" />
          <span>Twitter</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex space-x-2 border-b-2 border-violet-200 dark:border-violet-800">
        {[
          { id: "dashboard", label: "Dashboard", icon: ChartIcon },
          { id: "calendar", label: "Calendar", icon: CalendarIcon },
          { id: "content", label: "Content Generator", icon: HashtagIcon },
          { id: "analytics", label: "Analytics", icon: TrendingUpIcon },
          { id: "automation", label: "Automation", icon: PlayIcon },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 border-b-2 px-4 py-3 text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "border-violet-600 text-violet-600 dark:border-violet-400 dark:text-violet-400"
                  : "border-transparent text-slate-600 hover:border-violet-300 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dashboard Tab */}
      {activeTab === "dashboard" && (
        <div className="space-y-6">
          {/* Analytics Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {mockAnalytics.map((analytics) => {
              const Icon = platformIcons[analytics.platform];
              const colors = platformColors[analytics.platform];
              return (
                <div
                  key={analytics.platform}
                  className="rounded-2xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colors} shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="rounded-lg bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                      +{analytics.growth}%
                    </span>
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-white capitalize">
                    {analytics.platform}
                  </h3>
                  <p className="mb-4 text-2xl font-bold text-slate-700 dark:text-slate-300">
                    {analytics.followers.toLocaleString()}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Engagement</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{analytics.engagement}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Reach</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{analytics.reach.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Impressions</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{analytics.impressions.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Recent Posts */}
          <div className="rounded-2xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">Recent Scheduled Posts</h2>
            <div className="space-y-3">
              {filteredPosts.slice(0, 5).map((post) => {
                const Icon = platformIcons[post.platform];
                const colors = platformColors[post.platform];
                return (
                  <div
                    key={post.id}
                    className="flex items-center justify-between rounded-lg border-2 border-violet-100 bg-violet-50/50 p-4 dark:border-violet-900/50 dark:bg-violet-900/10"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${colors} shadow-md`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">{post.content.substring(0, 60)}...</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {post.scheduledDate} at {post.scheduledTime}
                        </p>
                      </div>
                    </div>
                    <span className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                      post.status === "scheduled" 
                        ? "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                        : post.status === "published"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                        : "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300"
                    }`}>
                      {post.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Calendar Tab */}
      {activeTab === "calendar" && (
        <div className="space-y-6">
          {/* Calendar View */}
          <div className="rounded-2xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Content Calendar</h2>
              <button className="flex items-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105">
                <PlusIcon className="h-4 w-4" />
                <span>New Post</span>
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div key={day} className="text-center text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {day}
                </div>
              ))}
              {Array.from({ length: 28 }).map((_, i) => {
                const day = i + 1;
                const dayPosts = filteredPosts.filter((post) => {
                  const postDate = new Date(post.scheduledDate);
                  return postDate.getDate() === day;
                });
                return (
                  <div
                    key={i}
                    className="min-h-24 rounded-lg border-2 border-violet-100 bg-violet-50/30 p-2 dark:border-violet-900/50 dark:bg-violet-900/10"
                  >
                    <div className="mb-1 text-xs font-semibold text-slate-600 dark:text-slate-400">{day}</div>
                    {dayPosts.map((post) => {
                      const Icon = platformIcons[post.platform];
                      return (
                        <div
                          key={post.id}
                          className="mb-1 flex items-center space-x-1 rounded bg-white/80 px-2 py-1 text-xs dark:bg-slate-800/80"
                        >
                          <Icon className="h-3 w-3" />
                          <span className="truncate">{post.scheduledTime}</span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scheduled Posts List */}
          <div className="rounded-2xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">All Scheduled Posts</h2>
            <div className="space-y-3">
              {filteredPosts.map((post) => {
                const Icon = platformIcons[post.platform];
                const colors = platformColors[post.platform];
                return (
                  <div
                    key={post.id}
                    className="flex items-center justify-between rounded-lg border-2 border-violet-100 bg-violet-50/50 p-4 dark:border-violet-900/50 dark:bg-violet-900/10"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${colors} shadow-md`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900 dark:text-white">{post.content}</p>
                        <div className="mt-1 flex items-center space-x-4 text-xs text-slate-600 dark:text-slate-400">
                          <span className="flex items-center space-x-1">
                            <CalendarIcon className="h-3 w-3" />
                            <span>{post.scheduledDate}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <ClockIcon className="h-3 w-3" />
                            <span>{post.scheduledTime}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="rounded-lg bg-violet-100 p-2 text-violet-600 hover:bg-violet-200 dark:bg-violet-900/50 dark:text-violet-400 dark:hover:bg-violet-900/70">
                        <EditIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200 dark:bg-red-900/50 dark:text-red-400 dark:hover:bg-red-900/70"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Content Generator Tab */}
      {activeTab === "content" && (
        <div className="space-y-6">
          <div className="rounded-2xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">Hook Generator</h2>
            <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
              Generate engaging hook phrases for your social media posts
            </p>

            <div className="mb-6">
              <button
                onClick={generateHook}
                className="w-full rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center justify-center space-x-2">
                  <SparklesIcon2 className="h-5 w-5" />
                  <span>Generate Hook Phrase</span>
                </div>
              </button>
            </div>

            {generatedHook && (
              <div className="mb-6 rounded-xl border-2 border-violet-300 bg-gradient-to-br from-violet-50 to-purple-50 p-6 dark:border-violet-700 dark:from-violet-900/20 dark:to-purple-900/20">
                <p className="text-lg font-semibold text-slate-900 dark:text-white">{generatedHook}</p>
              </div>
            )}

            <div className="rounded-xl border-2 border-violet-200 bg-violet-50/50 p-6 dark:border-violet-800 dark:bg-violet-900/10">
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Create New Post</h3>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Platform
                  </label>
                  <select
                    value={newPost.platform}
                    onChange={(e) => setNewPost({ ...newPost, platform: e.target.value as any })}
                    className="w-full rounded-xl border-2 border-violet-200 bg-white/80 px-4 py-3 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-violet-800 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
                  >
                    <option value="instagram">Instagram</option>
                    <option value="tiktok">TikTok</option>
                    <option value="twitter">Twitter</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Content
                  </label>
                  <textarea
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    placeholder="Enter your post content or generate a hook..."
                    rows={4}
                    className="w-full rounded-xl border-2 border-violet-200 bg-white/80 px-4 py-3 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-violet-800 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Scheduled Date
                    </label>
                    <input
                      type="date"
                      value={newPost.scheduledDate}
                      onChange={(e) => setNewPost({ ...newPost, scheduledDate: e.target.value })}
                      className="w-full rounded-xl border-2 border-violet-200 bg-white/80 px-4 py-3 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-violet-800 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Scheduled Time
                    </label>
                    <input
                      type="time"
                      value={newPost.scheduledTime}
                      onChange={(e) => setNewPost({ ...newPost, scheduledTime: e.target.value })}
                      className="w-full rounded-xl border-2 border-violet-200 bg-white/80 px-4 py-3 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-violet-800 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
                    />
                  </div>
                </div>
                <button
                  onClick={addScheduledPost}
                  className="w-full rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  Schedule Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === "analytics" && (
        <div className="space-y-6">
          {mockAnalytics.map((analytics) => {
            const Icon = platformIcons[analytics.platform];
            const colors = platformColors[analytics.platform];
            return (
              <div
                key={analytics.platform}
                className="rounded-2xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80"
              >
                <div className="mb-6 flex items-center space-x-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colors} shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white capitalize">
                      {analytics.platform} Analytics
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Performance metrics and insights</p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-xl border-2 border-violet-100 bg-violet-50/50 p-4 dark:border-violet-900/50 dark:bg-violet-900/10">
                    <p className="mb-1 text-sm text-slate-600 dark:text-slate-400">Followers</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      {analytics.followers.toLocaleString()}
                    </p>
                    <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">
                      +{analytics.growth}% this month
                    </p>
                  </div>
                  <div className="rounded-xl border-2 border-violet-100 bg-violet-50/50 p-4 dark:border-violet-900/50 dark:bg-violet-900/10">
                    <p className="mb-1 text-sm text-slate-600 dark:text-slate-400">Engagement Rate</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{analytics.engagement}%</p>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">Average per post</p>
                  </div>
                  <div className="rounded-xl border-2 border-violet-100 bg-violet-50/50 p-4 dark:border-violet-900/50 dark:bg-violet-900/10">
                    <p className="mb-1 text-sm text-slate-600 dark:text-slate-400">Reach</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      {analytics.reach.toLocaleString()}
                    </p>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">Last 30 days</p>
                  </div>
                  <div className="rounded-xl border-2 border-violet-100 bg-violet-50/50 p-4 dark:border-violet-900/50 dark:bg-violet-900/10">
                    <p className="mb-1 text-sm text-slate-600 dark:text-slate-400">Impressions</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      {analytics.impressions.toLocaleString()}
                    </p>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">Last 30 days</p>
                  </div>
                </div>

                {/* Engagement Chart Placeholder */}
                <div className="mt-6 rounded-xl border-2 border-violet-100 bg-violet-50/50 p-6 dark:border-violet-900/50 dark:bg-violet-900/10">
                  <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Engagement Trend</h3>
                  <div className="h-48 flex items-end justify-between space-x-2">
                    {Array.from({ length: 7 }).map((_, i) => {
                      const height = Math.random() * 100;
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center">
                          <div
                            className="w-full rounded-t bg-gradient-to-t from-violet-600 to-purple-600"
                            style={{ height: `${height}%` }}
                          />
                          <span className="mt-2 text-xs text-slate-600 dark:text-slate-400">Day {i + 1}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Automation Tab */}
      {activeTab === "automation" && (
        <div className="space-y-6">
          <div className="rounded-2xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">Post Sequences</h2>
            <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
              Create automated sequences of posts to maintain consistent engagement
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border-2 border-violet-200 bg-violet-50/50 p-6 dark:border-violet-800 dark:bg-violet-900/10">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Weekly Product Promotion</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Posts every Monday, Wednesday, Friday</p>
                  </div>
                  <span className="rounded-lg bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                    Active
                  </span>
                </div>
                <div className="mb-4 flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <InstagramIcon className="h-5 w-5 text-pink-500" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Instagram</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TwitterIcon className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Twitter</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="rounded-lg bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 hover:bg-violet-200 dark:bg-violet-900/50 dark:text-violet-400 dark:hover:bg-violet-900/70">
                    Edit Sequence
                  </button>
                  <button className="rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-200 dark:bg-red-900/50 dark:text-red-400 dark:hover:bg-red-900/70">
                    Pause
                  </button>
                </div>
              </div>

              <div className="rounded-xl border-2 border-violet-200 bg-violet-50/50 p-6 dark:border-violet-800 dark:bg-violet-900/10">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Daily Educational Content</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Posts every day at 9:00 AM</p>
                  </div>
                  <span className="rounded-lg bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">
                    Paused
                  </span>
                </div>
                <div className="mb-4 flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <TikTokIcon className="h-5 w-5" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">TikTok</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="rounded-lg bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 hover:bg-violet-200 dark:bg-violet-900/50 dark:text-violet-400 dark:hover:bg-violet-900/70">
                    Edit Sequence
                  </button>
                  <button className="rounded-lg bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-400 dark:hover:bg-emerald-900/70">
                    Activate
                  </button>
                </div>
              </div>
            </div>

            <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center space-x-2">
                <PlusIcon className="h-5 w-5" />
                <span>Create New Sequence</span>
              </div>
            </button>
          </div>

          <div className="rounded-2xl border-2 border-violet-200 bg-white/80 p-6 backdrop-blur-sm dark:border-violet-800 dark:bg-slate-800/80">
            <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">Automation Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-xl border-2 border-violet-100 bg-violet-50/50 p-4 dark:border-violet-900/50 dark:bg-violet-900/10">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Auto-post scheduled content</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Automatically publish posts at scheduled times</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-violet-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-violet-800"></div>
                </label>
              </div>
              <div className="flex items-center justify-between rounded-xl border-2 border-violet-100 bg-violet-50/50 p-4 dark:border-violet-900/50 dark:bg-violet-900/10">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Auto-generate hooks</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Automatically suggest hook phrases for new posts</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-violet-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-violet-800"></div>
                </label>
              </div>
              <div className="flex items-center justify-between rounded-xl border-2 border-violet-100 bg-violet-50/50 p-4 dark:border-violet-900/50 dark:bg-violet-900/10">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Auto-optimize posting times</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Automatically adjust posting times based on engagement data</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-violet-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-violet-800"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

