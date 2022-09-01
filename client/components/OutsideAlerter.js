import React, { useRef, useEffect } from "react";
//import PropTypes from "prop-types";
import styles from '../styles/Mainsearch.module.css'

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref,setFocused) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setFocused(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
  const {setFocused} = props  
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef,setFocused);

  return <div className={styles.searchContainer} ref={wrapperRef}>{props.children}</div>;
}

//OutsideAlerter.propTypes = {
//  children: PropTypes.element.isRequired
// };

export default OutsideAlerter;
