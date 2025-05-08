import { Button as MuiButton } from '@mui/material';

export interface ButtonProps {
  label: string;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  variant = 'contained', 
  color = 'primary',
  onClick 
}) => {
  return (
    <MuiButton 
      variant={variant} 
      color={color} 
      onClick={onClick}
    >
      {label}
    </MuiButton>
  );
};
