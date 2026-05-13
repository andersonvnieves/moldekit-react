export interface MkTabProps {
  data: string[];
  onTabSelect?: (index: number) => void;
  selectedTab?: number;
}
