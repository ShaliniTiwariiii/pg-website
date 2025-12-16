"use client";
import { useState } from 'react';

export default function ScheduleVisitModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <h3 style={{marginTop:0}}>Schedule a Visit</h3>
        <p className="muted">We will contact you to confirm a convenient time.</p>
        <form onSubmit={(e)=>{e.preventDefault(); onClose();}} style={{display:'grid',gap:10,marginTop:12}}>
          <input required placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} />
          <input required placeholder="Phone or email" value={phone} onChange={(e)=>setPhone(e.target.value)} />
          <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
            <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Request</button>
          </div>
        </form>
      </div>
    </div>
  );
}
