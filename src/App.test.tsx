import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import Form from "./Form";

test("Render React App", () => {
  render(<App />);
  const linkElement = screen.getByText(/React Simple Form/i);
  expect(linkElement).toBeInTheDocument();
});

test("First Name validation", () => {
  render(<Form />);
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
  const errorMessage = screen.getByText("First Name is required");
  expect(errorMessage).toBeInTheDocument();
});

test("Last Name validation", () => {
  render(<Form />);
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
  const errorMessage = screen.getByText("Last Name is required");
  expect(errorMessage).toBeInTheDocument();
});

test("Email validation", () => {
  render(<Form />);
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
  const errorMessage = screen.getByText("Email is required");
  expect(errorMessage).toBeInTheDocument();
});

test("WhatsApp validation", () => {
  render(<Form />);
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
  const errorMessage = screen.getByText("WhatsApp is required");
  expect(errorMessage).toBeInTheDocument();
});
