export interface Props {
  /**
   * className prop description
   */
  className?: string;
  index: number;
  inputRef: React.RefObject<HTMLInputElement>;
  onCodeEntryChange?(index: number, value: string): void;
}
