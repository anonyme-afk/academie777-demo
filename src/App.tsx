/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TopSections } from './sections/TopSections';
import { MidSections } from './sections/MidSections';
import { BottomSections } from './sections/BottomSections';

export default function App() {
  return (
    <div className="bg-[#f3f5f7] text-[#10131a] font-sans antialiased min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <TopSections />
        <MidSections />
        <BottomSections />
      </main>
      <Footer />
    </div>
  );
}
