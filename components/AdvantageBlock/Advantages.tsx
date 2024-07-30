import ProtectionIcon from '@/icons/ProtectionIcon';
import Advantage from './Advantage';
import ControlIcon from '@/icons/ControlIcon';
import ReliabilityIcon from '@/icons/ReliabilityIcon';

export default function Advantages() {
  return (
    <div className="flex flex-col gap-8 rounded-lg bg-[#807C78] p-8">
      <Advantage
        title="Protection"
        description="Request an offer to check your home’s eligibility. You’ll get initial numbers and schedule evaluation to finalize offer."
        Icon={ProtectionIcon}
      />
      <Advantage
        title="Control"
        description="Getting a competitive cash offer from RealHome is an easy path to sell your home, with more control."
        Icon={ControlIcon}
      />
      <Advantage
        title="Reliability"
        description="When you work with a real estate agent, you'll get selling support at every step, from prepping a home to sell."
        Icon={ReliabilityIcon}
      />
    </div>
  );
}
