'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Plus, 
  Heart, 
  Bell, 
  User, 
  Shield, 
  Gem, 
  Users,
  Settings,
} from 'lucide-react';
export function MarketplaceHeader() {
  const [notifications] = useState(3);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Gem className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                KunBit
              </span>
            </Link>
            
            <div className="hidden md:flex items-center gap-1">
              <Badge variant="secondary" className="text-xs">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Users className="h-3 w-3 mr-1" />
                DAO
              </Badge>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/marketplace" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Marketplace
            </Link>
            <Link href="/fractional" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Fractional Ownership
            </Link>
            <Link href="/escrow" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Escrow
            </Link>
            <Link href="/verification" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Verification
            </Link>
            <Link href="/dao" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              DAO
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="h-4 w-4" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {notifications}
                </Badge>
              )}
            </Button>

            {/* Watchlist */}
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4" />
            </Button>

            {/* Create Listing */}
            <Button size="sm" className="hidden md:flex">
              <Plus className="h-4 w-4 mr-2" />
              List Item
            </Button>

            {/* User Menu */}
            <div className="relative">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden md:block">Account</span>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden py-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/marketplace" className="text-sm font-medium text-gray-700">
                Browse
              </Link>
              <Link href="/fractional" className="text-sm font-medium text-gray-700">
                Fractional
              </Link>
              <Link href="/escrow" className="text-sm font-medium text-gray-700">
                Escrow
              </Link>
            </div>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              List
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} 