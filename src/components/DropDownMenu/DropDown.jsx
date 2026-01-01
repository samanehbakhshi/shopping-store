import { useState } from "react";
import "./DropDown.css";
import { SlArrowDown } from "react-icons/sl";
import  { useRef, useEffect } from "react";

function DropDown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeItem, setActiveItem] = useState("");
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dropDownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropDownRef]);

  const toggleDropdown = (e) => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
    setSearchTerm("");
    setActiveItem(value);
  };
  const selectOption = `Select an option <SlArrowDown/>`;
  return (
    <div className="dropdown" ref={dropDownRef}>
      <div className="dropdown__header" onClick={(e) => toggleDropdown(e)}>
        {selectedOption ? (
          <span className="selected-item">
            {selectedOption.label} <SlArrowDown />
          </span>
        ) : (
          <span>
            Default sorting
            <SlArrowDown />
          </span>
        )}
      </div>
      {isOpen && (
        <div className="dropdown__search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {filteredOptions.length === 0 ? (
            <div className="">{`No match for '${searchTerm}'`}</div>
          ) : (
            ""
          )}
        </div>
      )}
      {isOpen && (
        <div className="dropdown__options">
          {filteredOptions.map((option) => (
            <div
              className={
                activeItem === option
                  ? "dropdown__option active"
                  : "dropdown__option"
              }
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
