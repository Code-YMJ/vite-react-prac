// src/components/RSVPPopup.tsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Checkbox, TextField, Button, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import {addData} from 'firebase';

Modal.setAppElement('#root');

const RSVPPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [group_name, setGroupName] = useState('');
  const [group, setGroup] = useState<string[]>([]);
  const [attendees, setAttendees] = useState('');
  // let group_name: string = "";
  const [isComposing, setIsComposing] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isComposing) {
      setName(event.target.value);
    }
  };


  const handleGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setGroupName(value);
    setGroup((prev) =>
      prev.includes(value) ? prev.filter((g) => g !== value) : [...prev, value]
    );
  };

  const handleAttendeesChange = (event: SelectChangeEvent) => {
    setAttendees(event.target.value);
  };

  const handleSubmit = () => {
    addData(name, group_name , Number(attendees));

    onClose(); // 팝업 닫기
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="RSVP Form"  >
      <h2>RSVP</h2>
      <form>
        <TextField
          label="성함"
          value={name}
          onChange={handleNameChange}
          fullWidth
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={(event) => {
            setIsComposing(false);
            setName(event.currentTarget.textContent ? event.currentTarget.textContent : "");  // 입력 완료 후 최종 값 설정
          }}
        />
        <div>
          <label>구분:</label>
          <Checkbox
            checked={group.includes('신랑')}
            onChange={handleGroupChange}
            value="신랑"
          /> 신랑
          <Checkbox
            checked={group.includes('신부')}
            onChange={handleGroupChange}
            value="신부"
          /> 신부
          <Checkbox
            checked={group.includes('신랑 부모님')}
            onChange={handleGroupChange}
            value="신랑 부모님"
          /> 신랑 부모님
          <Checkbox
            checked={group.includes('신부 부모님')}
            onChange={handleGroupChange}
            value="신부 부모님"
          /> 신부 부모님
        </div>
        <FormControl fullWidth>
          <InputLabel>참석 인원</InputLabel>
          <Select value={attendees} onChange={handleAttendeesChange}>
            <MenuItem value="1">1명</MenuItem>
            <MenuItem value="2">2명</MenuItem>
            <MenuItem value="3">3명</MenuItem>
            <MenuItem value="4">4명</MenuItem>
          </Select>
        </FormControl>
        
        <div style={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            참석
          </Button>
          <Button variant="contained" color="secondary" onClick={onClose} style={{ marginLeft: '10px' }}>
            불참석
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default RSVPPopup;
