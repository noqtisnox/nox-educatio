import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight, FileText } from "lucide-react";
import styles from "./UnitDropdown.module.css";

// Example file data (replace with props or API data later)
const files = [
  { name: "Unit 1 - Intro.pdf", href: "/files/unit1.pdf", type: "pdf" },
  { name: "Unit 2 - Slides.pptx", href: "/files/unit2.pptx", type: "pptx" },
  { name: "Unit 3 - Notes.docx", href: "/files/unit3.docx", type: "docx" },
];

const fileIcon = (type: string) => {
  // You can expand this for more file types
  switch (type) {
    case "pdf":
      return <FileText color="#e53e3e" size={18} />;
    case "pptx":
      return <FileText color="#f59e42" size={18} />;
    case "docx":
      return <FileText color="#2563eb" size={18} />;
    default:
      return <FileText size={18} />;
  }
};

/*
 * TODO: Make this component not only for units, but for any type of content that can be placed (materials, labs, submissions, etc).
 */
const UnitDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Keyboard navigation: close on Escape
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className={styles.unitDropdown} ref={dropdownRef}>
      <button
        className={styles.unitDropdownButton}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close unit list" : "Open unit list"}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? (
          <ChevronDown className={styles.unitDropdownIcon} fontSize={20} />
        ) : (
          <ChevronRight className={styles.unitDropdownIcon} fontSize={20} />
        )}
        <span style={{ marginLeft: 4 }}>Units</span>
      </button>
      <div
        className={styles.unitDropdownContent}
        style={{ display: isOpen ? "block" : "none" }}
        role="listbox"
        tabIndex={-1}
      >
        {files.map((file) => (
          <a
            key={file.href}
            href={file.href}
            className={styles.unitDropdownLink}
            target="_blank"
            rel="noopener noreferrer"
            role="option"
            tabIndex={0}
            aria-label={file.name}
          >
            {fileIcon(file.type)}
            <span>{file.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UnitDropdown;
