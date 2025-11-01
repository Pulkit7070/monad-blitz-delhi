import { usePrivy } from '@privy-io/react-auth';
import { LoginButton } from '../wallet/LoginButton';
import { WalletInfo } from '../wallet/WalletInfo';
import { NetworkSwitcher } from '../wallet/NetworkSwitcher';

/**
 * Navbar Component
 *
 * Top navigation bar with:
 * - Logo
 * - Network switcher (when authenticated)
 * - Wallet info / Login button
 */
export function Navbar() {
  const { authenticated } = usePrivy();

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center p-1">
              <img src="/favicon.svg" alt="AgMON Logo" className="w-full h-full " />
            </div>
            <span className="text-lg font-bold">AgMON</span>
          </div>

          {/* Right side: Network switcher + Wallet */}
          <div className="flex items-center gap-3">
            {authenticated && <NetworkSwitcher />}

            {/* Show either login button or wallet info */}
            {authenticated ? <WalletInfo /> : <LoginButton />}
          </div>
        </div>
      </div>
    </nav>
  );
}
