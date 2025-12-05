import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { Categories } from '@/components/home/Categories';
import { BestSellers } from '@/components/home/BestSellers';
import { DealOfWeek } from '@/components/home/DealOfWeek';
import { TrustBadges } from '@/components/home/TrustBadges';
import { CelebrityClients } from '@/components/home/CelebrityClients';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <BestSellers />
      <DealOfWeek />
      <TrustBadges />
      <CelebrityClients />
    </Layout>
  );
};

export default Index;
