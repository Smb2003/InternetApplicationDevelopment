// using redux

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setColor } from "../store";

const ColorPicker = () => {
    const color = useSelector((state) => state.color.value);
    const dispatch = useDispatch();

    const handleColorChange = (event) => {
        dispatch(setColor(event.target.value));
    };

    const copyColor = () => {
        navigator.clipboard.writeText(color)
            .then(() => alert("Color copied to clipboard!"))
            .catch(err => console.error("Failed to copy:", err));
    };

    return (
        <div style={{
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#f4f4f4"
        }}>
            <div style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
            }}>
                <h2>Color Picker 🎨</h2>
                <input 
                    type="color" 
                    value={color} 
                    onChange={handleColorChange} 
                    style={{ border: "none", width: "100px", height: "100px", cursor: "pointer" }}
                />
                <p style={{ marginTop: "10px", fontSize: "18px", fontWeight: "bold" }}>HEX: {color}</p>
                <button 
                    onClick={copyColor} 
                    style={{
                        marginTop: "10px", 
                        padding: "10px", 
                        border: "none", 
                        background: "#007bff", 
                        color: "white", 
                        cursor: "pointer", 
                        borderRadius: "5px"
                    }}
                >
                    Copy Color
                </button>
            </div>
        </div>
    );
};

export default ColorPicker;
