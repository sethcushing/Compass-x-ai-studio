import {
  PenTool, GitBranch, Cpu, ShieldCheck, Package, GitPullRequest, Cloud,
  Monitor, FileText, Wrench, Send, KeyRound, Database, Cable, Table2,
  CheckCircle, RefreshCw, BadgeCheck, FolderGit2, Shield, Rocket, Flag,
  Activity, User
} from 'lucide-react';

const iconMap = {
  PenTool, GitBranch, Cpu, ShieldCheck, Package, GitPullRequest, Cloud,
  Monitor, FileText, Wrench, Send, KeyRound, Database, Cable, Table2,
  CheckCircle, RefreshCw, BadgeCheck, FolderGit2, Shield, Rocket, Flag,
  Activity, User
};

export const getIcon = (name) => {
  return iconMap[name] || null;
};

export default iconMap;
