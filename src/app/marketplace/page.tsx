'use client';

import { useState } from 'react';
import { MarketplaceHeader } from '@/components/marketplace/MarketplaceHeader';
import { CollectiblesGrid } from '@/components/marketplace/CollectiblesGrid';
import { CategoryFilter } from '@/components/marketplace/CategoryFilter';
import { SearchBar } from '@/components/marketplace/SearchBar';
import { StatsOverview } from '@/components/marketplace/StatsOverview';
import { WalletConnect } from '@/components/WalletConnect';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Filter, TrendingUp, Shield, Users } from 'lucide-react';
import { Collectible, CollectibleCategory } from '@/lib/types';

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Items', count: 156 },
    { id: 'watches', name: 'Watches', count: 42 },
    { id: 'bags', name: 'Bags', count: 38 },
    { id: 'jewelry', name: 'Jewelry', count: 28 },
    { id: 'art', name: 'Art', count: 24 },
    { id: 'collectibles', name: 'Collectibles', count: 24 },
  ];

  // Mock categories that match the CollectibleCategory type
  const mockCategories: Record<string, CollectibleCategory> = {
    watches: {
      id: 'watches',
      name: 'Watches',
      description: 'Luxury timepieces and vintage watches',
      icon: '⌚',
      verificationRequired: true,
      minValueForCustody: 5000,
    },
    bags: {
      id: 'bags',
      name: 'Bags',
      description: 'Designer handbags and luxury accessories',
      icon: '👜',
      verificationRequired: true,
      minValueForCustody: 3000,
    },
    art: {
      id: 'art',
      name: 'Art',
      description: 'Fine art, prints, and collectible artwork',
      icon: '🎨',
      verificationRequired: true,
      minValueForCustody: 10000,
    },
    jewelry: {
      id: 'jewelry',
      name: 'Jewelry',
      description: 'Fine jewelry and precious stones',
      icon: '💎',
      verificationRequired: true,
      minValueForCustody: 2000,
    },
    collectibles: {
      id: 'collectibles',
      name: 'Collectibles',
      description: 'Rare collectibles and memorabilia',
      icon: '🏆',
      verificationRequired: false,
      minValueForCustody: 1000,
    },
  };

  const sampleCollectibles: Collectible[] = [
    {
      id: '1',
      nftTokenId: '0x1234567890abcdef',
      title: 'Rolex Submariner 116610LN',
      description: 'Classic Rolex Submariner in excellent condition with original box and papers. Authenticated by Rolex official service center.',
      category: mockCategories.watches,
      ownerId: 'user-1',
      currentPrice: 8500,
      originalPrice: 9500,
      currency: 'USD',
      images: ['/api/placeholder/300/300'],
      condition: 'excellent',
      authenticityStatus: 'verified',
      custodyStatus: 'owner',
      tags: ['Rolex', 'Submariner', 'Swiss Made', 'Automatic'],
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15'),
      digitalCertificate: {
        id: 'cert-1',
        nftTokenId: '0x1234567890abcdef',
        serialNumber: 'ROLEX-2023-001',
        manufacturer: 'Rolex',
        productionDate: new Date('2023-01-15'),
        authenticityVerified: true,
        verifiedBy: ['Rolex Official'],
        metadata: {
          brand: 'Rolex',
          model: 'Submariner 116610LN',
          condition: 'excellent',
          materials: ['Stainless Steel', 'Ceramic'],
          dimensions: '40mm',
          weight: '155g',
          images: ['/api/placeholder/300/300'],
          documents: ['warranty.pdf', 'certificate.pdf'],
        },
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15'),
      },
      fractionalOwnership: {
        id: 'frac-1',
        collectibleId: '1',
        totalShares: 100,
        availableShares: 20,
        pricePerShare: 85,
        shareholders: [
          {
            userId: 'user-1',
            shares: 80,
            percentage: 80,
            joinedAt: new Date('2024-01-15'),
          },
        ],
        votingThreshold: 51,
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15'),
      },
    },
    {
      id: '2',
      nftTokenId: '0xabcdef1234567890',
      title: 'Hermès Birkin 30cm',
      description: 'Authentic Hermès Birkin bag in Togo leather. Includes dust bag, box, and authenticity card. Rare find in excellent condition.',
      category: mockCategories.bags,
      ownerId: 'user-2',
      currentPrice: 12000,
      originalPrice: 15000,
      currency: 'USD',
      images: ['/api/placeholder/300/300'],
      condition: 'excellent',
      authenticityStatus: 'verified',
      custodyStatus: 'custody',
      tags: ['Hermès', 'Birkin', 'Togo Leather', 'Gold Hardware'],
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-10'),
      digitalCertificate: {
        id: 'cert-2',
        nftTokenId: '0xabcdef1234567890',
        serialNumber: 'HERMES-2022-045',
        manufacturer: 'Hermès',
        productionDate: new Date('2022-06-20'),
        authenticityVerified: true,
        verifiedBy: ['Hermès Authentication'],
        metadata: {
          brand: 'Hermès',
          model: 'Birkin 30cm',
          condition: 'excellent',
          materials: ['Togo Leather', 'Palladium Hardware'],
          dimensions: '30cm x 22cm x 16cm',
          weight: '1.2kg',
          images: ['/api/placeholder/300/300'],
          documents: ['authenticity.pdf', 'receipt.pdf'],
        },
        createdAt: new Date('2024-01-10'),
        updatedAt: new Date('2024-01-10'),
      },
    },
    {
      id: '3',
      nftTokenId: '0x9876543210fedcba',
      title: 'Banksy "Girl with Balloon"',
      description: 'Original Banksy artwork with full provenance. Limited edition screen print with certificate of authenticity from Pest Control Office.',
      category: mockCategories.art,
      ownerId: 'user-3',
      currentPrice: 25000,
      originalPrice: 30000,
      currency: 'USD',
      images: ['/api/placeholder/300/300'],
      condition: 'mint',
      authenticityStatus: 'verified',
      custodyStatus: 'escrow',
      tags: ['Banksy', 'Street Art', 'Limited Edition', 'Screen Print'],
      createdAt: new Date('2024-01-05'),
      updatedAt: new Date('2024-01-05'),
      digitalCertificate: {
        id: 'cert-3',
        nftTokenId: '0x9876543210fedcba',
        serialNumber: 'BANKSY-2021-012',
        manufacturer: 'Pest Control Office',
        productionDate: new Date('2021-03-10'),
        authenticityVerified: true,
        verifiedBy: ['Pest Control Office'],
        metadata: {
          brand: 'Banksy',
          model: 'Girl with Balloon',
          condition: 'mint',
          materials: ['Screen Print', 'Paper'],
          dimensions: '70cm x 50cm',
          images: ['/api/placeholder/300/300'],
          documents: ['certificate.pdf', 'provenance.pdf'],
        },
        createdAt: new Date('2024-01-05'),
        updatedAt: new Date('2024-01-05'),
      },
      fractionalOwnership: {
        id: 'frac-3',
        collectibleId: '3',
        totalShares: 100,
        availableShares: 50,
        pricePerShare: 250,
        shareholders: [
          {
            userId: 'user-3',
            shares: 50,
            percentage: 50,
            joinedAt: new Date('2024-01-05'),
          },
        ],
        votingThreshold: 51,
        createdAt: new Date('2024-01-05'),
        updatedAt: new Date('2024-01-05'),
      },
    },
    {
      id: '4',
      nftTokenId: '0xfedcba0987654321',
      title: 'Cartier Love Bracelet',
      description: 'Authentic Cartier Love bracelet in 18k yellow gold. Size 17, includes screwdriver and original box. Perfect condition.',
      category: mockCategories.jewelry,
      ownerId: 'user-4',
      currentPrice: 8500,
      originalPrice: 8500,
      currency: 'USD',
      images: ['/api/placeholder/300/300'],
      condition: 'excellent',
      authenticityStatus: 'pending',
      custodyStatus: 'owner',
      tags: ['Cartier', 'Love Bracelet', '18k Gold', 'Size 17'],
      createdAt: new Date('2024-01-12'),
      updatedAt: new Date('2024-01-12'),
    },
    {
      id: '5',
      nftTokenId: '0x5555666677778888',
      title: 'Vintage Star Wars Action Figures',
      description: 'Complete set of 1977 Star Wars action figures in original packaging. All figures are in mint condition with original accessories.',
      category: mockCategories.collectibles,
      ownerId: 'user-5',
      currentPrice: 3500,
      originalPrice: 4000,
      currency: 'USD',
      images: ['/api/placeholder/300/300'],
      condition: 'mint',
      authenticityStatus: 'verified',
      custodyStatus: 'owner',
      tags: ['Star Wars', 'Vintage', 'Action Figures', '1977'],
      createdAt: new Date('2024-01-08'),
      updatedAt: new Date('2024-01-08'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MarketplaceHeader />
      <WalletConnect onConnect={() => {}} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Digital Collectibles Marketplace
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover, trade, and own authentic digital collectibles with blockchain-verified authenticity, 
              fractional ownership, and secure escrow services.
            </p>
          </div>
          
          <StatsOverview />
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <SearchBar onSearch={setSearchQuery} />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Advanced Filters
              </Button>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                List Your Item
              </Button>
            </div>
          </div>
          
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Features Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="h-5 w-5 text-green-600" />
                Authenticity Guaranteed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Every item is verified on-chain with digital certificates and brand signatures.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-blue-600" />
                Fractional Ownership
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Co-own high-value items with multiple investors through fractional NFTs.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                Secure Escrow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Protected transactions with smart contract escrow and dispute resolution.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Collectibles Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Collectibles
            </h2>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">156 items</Badge>
              <Badge variant="outline">24 verified</Badge>
            </div>
          </div>
          
          <CollectiblesGrid 
            collectibles={sampleCollectibles}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
          />
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Trading?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of collectors and investors in the most secure digital collectibles marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              List Your First Item
            </Button>
            <Button variant="outline" size="lg">
              Browse All Items
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
} 