import React from 'react';
import styled from 'styled-components';
import Button from './Button';

interface ControlPanelProps {
  enabled: boolean;
  autoRefresh: boolean;
  onEnabledChange: (enabled: boolean) => void;
  onAutoRefreshChange: (autoRefresh: boolean) => void;
  onGetCat: () => void;
  disabled?: boolean;
}

const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
`;

const Checkbox = styled.input`
  cursor: pointer;
  width: 16px;
  height: 16px;
`;

const ControlPanel: React.FC<ControlPanelProps> = ({
  enabled,
  autoRefresh,
  onEnabledChange,
  onAutoRefreshChange,
  onGetCat,
  disabled
}) => {
  return (
    <Container>
      <CheckboxContainer>
        <Label>
          <Checkbox
            type="checkbox"
            checked={enabled}
            onChange={(e) => onEnabledChange(e.target.checked)}
          />
          Enabled
        </Label>
      </CheckboxContainer>
      <CheckboxContainer>
        <Label>
          <Checkbox
            type="checkbox"
            checked={autoRefresh}
            onChange={(e) => onAutoRefreshChange(e.target.checked)}
            disabled={!enabled}
          />
          Auto-refresh every 5 second
        </Label>
      </CheckboxContainer>
      <Button onClick={onGetCat} disabled={!enabled || disabled}>
        Get cat
      </Button>
    </Container>
  );
};

export default ControlPanel; 