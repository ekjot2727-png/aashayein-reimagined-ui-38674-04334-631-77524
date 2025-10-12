import { Shield, CheckCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface VerifiedBadgeProps {
  verified: boolean;
  donationCount?: number;
}

const VerifiedBadge = ({ verified, donationCount = 0 }: VerifiedBadgeProps) => {
  if (!verified) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="default" className="gap-1 bg-success hover:bg-success/90">
            <CheckCircle className="w-3 h-3" />
            Verified
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-sm">
            <div className="flex items-center gap-1 font-semibold mb-1">
              <Shield className="w-4 h-4" />
              Verified Donor
            </div>
            <p className="text-xs text-muted-foreground">
              {donationCount} successful donations
            </p>
            <p className="text-xs text-muted-foreground">
              Identity and health verified
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default VerifiedBadge;
