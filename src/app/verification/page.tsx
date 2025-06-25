'use client';

import { useState } from 'react';
import { MarketplaceHeader } from '@/components/marketplace/MarketplaceHeader';
import { WalletConnect } from '@/components/WalletConnect';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  Users,
  Camera,
  Fingerprint,
  Lock,
  Eye,
  Upload,
  Download,
  Clock
} from 'lucide-react';

export default function VerificationPage() {
  const [activeTab, setActiveTab] = useState<'certificates' | 'brands' | 'kyc' | 'physical'>('certificates');

  const certificates = [
    {
      id: '1',
      itemName: 'Rolex Submariner 116610LN',
      serialNumber: 'ROLEX-2023-001',
      certificateHash: '0x1234...5678',
      verifiedBy: 'Rolex Official',
      verifiedAt: '2024-01-15',
      status: 'verified',
      authenticity: 'Brand Verified',
      metadata: {
        productionDate: '2023-01-15',
        model: '116610LN',
        material: 'Stainless Steel',
        movement: 'Caliber 3135',
        warranty: '5 years',
      },
      images: ['/api/placeholder/300/200', '/api/placeholder/300/200'],
      blockchainProof: 'https://etherscan.io/tx/0x...',
    },
    {
      id: '2',
      itemName: 'Hermès Birkin 30cm',
      serialNumber: 'HERMES-2022-045',
      certificateHash: '0x8765...4321',
      verifiedBy: 'Hermès Authentication',
      verifiedAt: '2024-01-10',
      status: 'verified',
      authenticity: 'Physical Verification',
      metadata: {
        productionDate: '2022-06-20',
        model: 'Birkin 30cm',
        material: 'Togo Leather',
        color: 'Gold',
        hardware: 'Palladium',
        craftsman: 'ID-789',
      },
      images: ['/api/placeholder/300/200', '/api/placeholder/300/200'],
      blockchainProof: 'https://etherscan.io/tx/0x...',
    },
    {
      id: '3',
      itemName: 'Banksy "Girl with Balloon"',
      serialNumber: 'BANKSY-2021-012',
      certificateHash: '0x9876...5432',
      verifiedBy: 'Pest Control Office',
      verifiedAt: '2024-01-05',
      status: 'pending',
      authenticity: 'Gallery Verification',
      metadata: {
        productionDate: '2021-03-10',
        medium: 'Screen Print',
        edition: 'Limited Edition',
        gallery: 'Lazarides Gallery',
        provenance: 'Direct from Artist',
      },
      images: ['/api/placeholder/300/200'],
      blockchainProof: null,
    },
  ];

  const verifiedBrands = [
    {
      id: '1',
      name: 'Rolex',
      logo: '/api/placeholder/100/100',
      verificationLevel: 'Premium',
      verifiedItems: 1250,
      verificationFee: 500,
      description: 'Official Rolex authentication and verification services.',
      features: ['Digital Certificates', 'Serial Number Verification', 'Warranty Transfer'],
    },
    {
      id: '2',
      name: 'Hermès',
      logo: '/api/placeholder/100/100',
      verificationLevel: 'Premium',
      verifiedItems: 890,
      verificationFee: 400,
      description: 'Authentic Hermès bag and accessory verification.',
      features: ['Physical Inspection', 'Craftsman Verification', 'Material Authentication'],
    },
    {
      id: '3',
      name: 'Pest Control Office',
      logo: '/api/placeholder/100/100',
      verificationLevel: 'Standard',
      verifiedItems: 340,
      verificationFee: 200,
      description: 'Official Banksy artwork authentication service.',
      features: ['Artist Verification', 'Provenance Tracking', 'Gallery Confirmation'],
    },
  ];

  const kycServices = [
    {
      id: '1',
      name: 'Basic KYC',
      price: 50,
      features: [
        'Identity verification',
        'Address verification',
        'Basic background check',
        'Digital identity NFT',
      ],
      processingTime: '24-48 hours',
      required: ['Government ID', 'Proof of Address', 'Selfie'],
    },
    {
      id: '2',
      name: 'Premium KYC',
      price: 150,
      features: [
        'Enhanced identity verification',
        'Financial background check',
        'Reputation scoring',
        'Priority marketplace access',
        'Reduced escrow fees',
      ],
      processingTime: '3-5 business days',
      required: ['Government ID', 'Proof of Address', 'Financial Statements', 'References'],
    },
    {
      id: '3',
      name: 'Enterprise KYC',
      price: 500,
      features: [
        'Full compliance verification',
        'AML/KYC compliance',
        'Corporate verification',
        'White-label services',
        'API access',
        'Custom integration',
      ],
      processingTime: '1-2 weeks',
      required: ['Corporate Documents', 'Financial Records', 'Compliance Certificates'],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="h-4 w-4" />;
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'rejected':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MarketplaceHeader />
      <WalletConnect onConnect={() => {}} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Verification & Authentication
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Digital certificates, brand verification, and KYC services to ensure authenticity 
            and build trust in the digital collectibles marketplace.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">2,480</div>
                <div className="text-sm text-gray-600">Verified Items</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-green-600 mb-2">45</div>
                <div className="text-sm text-gray-600">Verified Brands</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-purple-600 mb-2">1,250</div>
                <div className="text-sm text-gray-600">KYC Verified Users</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-orange-600 mb-2">99.8%</div>
                <div className="text-sm text-gray-600">Authentication Accuracy</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Button 
            variant={activeTab === 'certificates' ? 'default' : 'outline'}
            onClick={() => setActiveTab('certificates')}
            className="flex items-center gap-2"
          >
            <FileText className="h-4 w-4" />
            Digital Certificates
          </Button>
          <Button 
            variant={activeTab === 'brands' ? 'default' : 'outline'}
            onClick={() => setActiveTab('brands')}
            className="flex items-center gap-2"
          >
            <Shield className="h-4 w-4" />
            Brand Verification
          </Button>
          <Button 
            variant={activeTab === 'kyc' ? 'default' : 'outline'}
            onClick={() => setActiveTab('kyc')}
            className="flex items-center gap-2"
          >
            <Users className="h-4 w-4" />
            KYC Services
          </Button>
          <Button 
            variant={activeTab === 'physical' ? 'default' : 'outline'}
            onClick={() => setActiveTab('physical')}
            className="flex items-center gap-2"
          >
            <Camera className="h-4 w-4" />
            Physical Verification
          </Button>
        </div>

        {/* Digital Certificates */}
        {activeTab === 'certificates' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Digital Certificates
              </h2>
              <Button className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Create Certificate
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <Card key={cert.id} className="overflow-hidden">
                  <div className="relative">
                    <img 
                      src={cert.images[0]} 
                      alt={cert.itemName}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={`flex items-center gap-1 ${getStatusColor(cert.status)}`}>
                        {getStatusIcon(cert.status)}
                        {cert.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline">
                        {cert.authenticity}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.itemName}</CardTitle>
                    <p className="text-sm text-gray-600">Serial: {cert.serialNumber}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Verified By</div>
                        <div className="font-medium">{cert.verifiedBy}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Verified At</div>
                        <div className="font-medium">{cert.verifiedAt}</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-2">Certificate Hash</div>
                      <div className="text-xs font-mono text-gray-600 break-all">
                        {cert.certificateHash}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Brand Verification */}
        {activeTab === 'brands' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Verified Brands
              </h2>
              <Button className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Apply for Verification
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {verifiedBrands.map((brand) => (
                <Card key={brand.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <img 
                        src={brand.logo} 
                        alt={brand.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <CardTitle className="text-lg">{brand.name}</CardTitle>
                        <Badge variant="secondary">{brand.verificationLevel}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">{brand.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Verified Items</div>
                        <div className="font-medium">{brand.verifiedItems}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Verification Fee</div>
                        <div className="font-medium">${brand.verificationFee}</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium mb-2">Features</div>
                      <div className="space-y-1">
                        {brand.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full" size="sm">
                      Request Verification
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* KYC Services */}
        {activeTab === 'kyc' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                KYC Services
              </h2>
              <Button className="flex items-center gap-2">
                <Fingerprint className="h-4 w-4" />
                Start KYC Process
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {kycServices.map((service) => (
                <Card key={service.id} className="relative">
                  {service.id === '2' && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-center">{service.name}</CardTitle>
                    <div className="text-center">
                      <span className="text-3xl font-bold">${service.price}</span>
                      <span className="text-gray-600">/one-time</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-2">Processing Time</div>
                      <div className="text-sm text-gray-600">{service.processingTime}</div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-2">Required Documents</div>
                      <div className="space-y-1">
                        {service.required.map((doc, index) => (
                          <div key={index} className="text-sm text-gray-600">• {doc}</div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full" size="lg">
                      Choose {service.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Physical Verification */}
        {activeTab === 'physical' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Physical Verification Services
              </h2>
              <Button className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                Schedule Verification
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5 text-blue-600" />
                    Physical Inspection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Professional authentication experts examine your item in person at our secure facilities.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Expert examination by certified authenticators
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      High-resolution photography and documentation
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Material and construction analysis
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Serial number and marking verification
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">$200</div>
                    <div className="text-sm text-gray-600">per item</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-green-600" />
                    Secure Custody
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Store your high-value items in our climate-controlled, insured facilities.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Climate-controlled storage facilities
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      24/7 security monitoring
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Full insurance coverage
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Regular condition reports
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">$50/month</div>
                    <div className="text-sm text-gray-600">per item</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Verify Your Items?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Build trust and increase the value of your collectibles with our comprehensive verification services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Start Verification Process
            </Button>
            <Button variant="outline" size="lg">
              Learn More About Authentication
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
} 