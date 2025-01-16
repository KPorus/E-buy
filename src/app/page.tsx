import DesktopPage from "@/components/desktop";
import { isMobile } from "@/utils/isMobile";
import { headers } from "next/headers";

export default function Home() {
  const userAgent = headers().get("user-agent") || "";
	const isMobileDevice = isMobile(userAgent);
  return (
    <div className="container">
      {isMobileDevice ? (
        <div className="flex justify-center items-center bg-neutral-950 text-white font-bold h-screen p-4 text-center">Mobile view is not developed. Please go back to Desktop view or Desktop.</div>
      ) : (
          <DesktopPage />
				)}
    </div>
  );
}
