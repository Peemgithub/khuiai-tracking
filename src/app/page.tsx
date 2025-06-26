'use client';
import { useState, useEffect } from 'react';
import { Providers } from '@/components/Providers';
import { MarketplaceHeader } from '@/components/marketplace/MarketplaceHeader';
import { StatsOverview } from '@/components/marketplace/StatsOverview';
import { SearchBar } from '@/components/marketplace/SearchBar';
import { CategoryFilter } from '@/components/marketplace/CategoryFilter';
import { CollectiblesGrid } from '@/components/marketplace/CollectiblesGrid';
import { Collectible } from '@/lib/types';

export default function HomePage() {
  const [collectibles, setCollectibles] = useState<Collectible[]>([]);
  const [filteredCollectibles, setFilteredCollectibles] = useState<Collectible[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load sample collectibles (in real app, this would come from API)
    const sampleCollectibles: Collectible[] = [
      {
        id: '1',
        nftTokenId: '1',
        title: 'Rolex Submariner 116610LN',
        description: 'Classic black dial Submariner with date, excellent condition',
        category: {
          id: 'watches',
          name: 'Watches',
          description: 'Luxury timepieces',
          icon: '⌚',
          verificationRequired: true,
          minValueForCustody: 100000
        },
        ownerId: 'user1',
        currentPrice: 850000,
        originalPrice: 900000,
        currency: 'THB',
        images: ['/api/placeholder/400/300'],
        condition: 'excellent',
        authenticityStatus: 'verified',
        custodyStatus: 'owner',
        tags: ['luxury', 'sport', 'diving'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        nftTokenId: '2',
        title: 'Hermès Birkin 30cm',
        description: 'Togo leather Birkin bag in black, mint condition',
        category: {
          id: 'bags',
          name: 'Bags',
          description: 'Luxury handbags',
          icon: '👜',
          verificationRequired: true,
          minValueForCustody: 50000
        },
        ownerId: 'user2',
        currentPrice: 450000,
        originalPrice: 500000,
        currency: 'THB',
        images: ['/api/placeholder/400/300'],
        condition: 'mint',
        authenticityStatus: 'verified',
        custodyStatus: 'owner',
        tags: ['luxury', 'leather', 'classic'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        nftTokenId: '3',
        title: 'Nike Air Jordan 1 Retro High OG',
        description: 'Chicago colorway, limited edition release',
        category: {
          id: 'shoes',
          name: 'Shoes',
          description: 'Sneakers and footwear',
          icon: '👟',
          verificationRequired: false,
          minValueForCustody: 10000
        },
        ownerId: 'user3',
        currentPrice: 25000,
        originalPrice: 30000,
        currency: 'THB',
        images: ['/api/placeholder/400/300'],
        condition: 'good',
        authenticityStatus: 'verified',
        custodyStatus: 'owner',
        tags: ['sneakers', 'limited', 'basketball'],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    setCollectibles(sampleCollectibles);
    setFilteredCollectibles(sampleCollectibles);
  }, []);

  useEffect(() => {
    let filtered = collectibles;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category.id === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredCollectibles(filtered);
  }, [collectibles, selectedCategory, searchQuery]);

  return (
    <Providers>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <MarketplaceHeader />
        
        <main className="container mx-auto px-4 py-8">
          <StatsOverview />
          
          <div className="mt-8 space-y-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search collectibles, brands, or tags..."
              />
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
            
            <CollectiblesGrid collectibles={filteredCollectibles} />
          </div>
        </main>
      </div>
    </Providers>
  );
} 