import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(s