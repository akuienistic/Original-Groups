import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Package,
  Users,
  ShoppingBag,
  TrendingUp,
  Eye,
  MessageSquare,
  Plus,
  Edit,
  Trash2,
  BarChart3,
  Settings,
  Home,
} from 'lucide-react';
import { products, categories } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const stats = [
  { title: 'Total Revenue', value: '$124,580', change: '+12.5%', icon: TrendingUp },
  { title: 'Total Orders', value: '1,284', change: '+8.2%', icon: ShoppingBag },
  { title: 'Total Products', value: products.length.toString(), change: '+2', icon: Package },
  { title: 'Total Visitors', value: '45.2K', change: '+15.3%', icon: Users },
];

const recentInquiries = [
  { id: 1, name: 'Ahmed Hassan', product: 'iPhone 17 Pro Max', message: 'Is this available in gold?', time: '2 hours ago' },
  { id: 2, name: 'Sarah Ali', product: 'Premium Turkish Kaftan', message: 'Do you have size XL?', time: '4 hours ago' },
  { id: 3, name: 'Omar Yilmaz', product: 'Oud Royal Parfum', message: 'Can I get a sample first?', time: '6 hours ago' },
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="font-display text-xl font-semibold">
              Original <span className="text-gold">Groups</span>
            </Link>
            <Badge variant="secondary">Admin</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/">
                <Home className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="dashboard">
              <BarChart3 className="h-4 w-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="products">
              <Package className="h-4 w-4 mr-2" />
              Products
            </TabsTrigger>
            <TabsTrigger value="inquiries">
              <MessageSquare className="h-4 w-4 mr-2" />
              Inquiries
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <Card key={stat.title}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                        <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                      </div>
                      <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center">
                        <stat.icon className="h-6 w-6 text-gold" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts Placeholder */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-secondary/50 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Sales chart visualization</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Most Viewed Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {products.slice(0, 5).map((product, index) => (
                      <div key={product.id} className="flex items-center gap-4">
                        <span className="text-lg font-bold text-muted-foreground w-6">
                          {index + 1}
                        </span>
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{product.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {Math.floor(Math.random() * 1000) + 500} views
                          </p>
                        </div>
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Inquiries */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInquiries.map((inquiry) => (
                    <div
                      key={inquiry.id}
                      className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg"
                    >
                      <div className="h-10 w-10 bg-gold/20 rounded-full flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-gold" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{inquiry.name}</p>
                          <span className="text-xs text-muted-foreground">{inquiry.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Re: {inquiry.product}
                        </p>
                        <p className="text-sm mt-1">{inquiry.message}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Reply
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Products</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-foreground text-background hover:bg-foreground/90">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Product</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Product Name</Label>
                        <Input id="name" placeholder="Enter product name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="brand">Brand</Label>
                        <Input id="brand" placeholder="Enter brand" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="price">Price ($)</Label>
                        <Input id="price" type="number" placeholder="0.00" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat.id} value={cat.id}>
                                {cat.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea id="description" placeholder="Product description" />
                    </div>
                    <div className="space-y-2">
                      <Label>Product Images</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                        <p className="text-muted-foreground">
                          Drag & drop images or click to upload
                        </p>
                      </div>
                    </div>
                    <Button className="w-full">Save Product</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-xs text-muted-foreground">{product.brand}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="capitalize">{product.category}</TableCell>
                        <TableCell>${product.price.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge variant={product.inStock ? 'default' : 'destructive'}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {product.isNew && (
                              <Badge className="bg-gold text-accent-foreground">New</Badge>
                            )}
                            {product.isBestSeller && (
                              <Badge variant="secondary">Best Seller</Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inquiries Tab */}
          <TabsContent value="inquiries" className="space-y-6">
            <h2 className="text-2xl font-bold">Customer Inquiries</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentInquiries.map((inquiry) => (
                    <div
                      key={inquiry.id}
                      className="flex items-start gap-4 p-4 border border-border rounded-lg"
                    >
                      <div className="h-12 w-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-semibold text-gold">
                          {inquiry.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold">{inquiry.name}</p>
                          <span className="text-sm text-muted-foreground">{inquiry.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Product: {inquiry.product}
                        </p>
                        <p className="text-sm">{inquiry.message}</p>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" className="bg-[#25D366] hover:bg-[#20BA5C]">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Reply via WhatsApp
                          </Button>
                          <Button variant="outline" size="sm">
                            Mark as Read
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
