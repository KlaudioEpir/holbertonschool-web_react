import "@testing-library/jest-dom";

import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

import Notifications from "./Notifications";

const baseList = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
];

test("does not re-render when notifications length stays the same", () => {
  const { rerender } = render(
    <Notifications notifications={baseList} displayDrawer={true} />
  );

  expect(screen.getByText(/new course available/i)).toBeInTheDocument();

  const sameLengthDifferentContent = [
    { id: 1, type: "default", value: "Updated text" },
    { id: 2, type: "urgent", value: "New resume available" },
  ];

  rerender(
    <Notifications
      notifications={sameLengthDifferentContent}
      displayDrawer={true}
    />
  );

  expect(screen.getByText(/new course available/i)).toBeInTheDocument();
  expect(screen.queryByText(/updated text/i)).not.toBeInTheDocument();
});

test("re-renders when notifications length changes", () => {
  const { rerender } = render(
    <Notifications notifications={baseList} displayDrawer={true} />
  );

  expect(screen.getAllByRole("listitem")).toHaveLength(2);

  const longerList = [
    ...baseList,
    { id: 3, type: "urgent", value: "Third item" },
  ];

  rerender(
    <Notifications
      notifications={longerList}
      displayDrawer={true}
    />
  );

  expect(screen.getAllByRole("listitem")).toHaveLength(3);
  expect(screen.getByText(/third item/i)).toBeInTheDocument();
});

test("calls handleDisplayDrawer when clicking on Your notifications", () => {
  const handleDisplayDrawer = jest.fn();

  render(
    <Notifications
      notifications={baseList}
      displayDrawer={false}
      handleDisplayDrawer={handleDisplayDrawer}
    />
  );

  fireEvent.click(screen.getByText(/your notifications/i));

  expect(handleDisplayDrawer).toHaveBeenCalled();
});

test("calls handleHideDrawer when clicking on the close button", () => {
  const handleHideDrawer = jest.fn();

  render(
    <Notifications
      notifications={baseList}
      displayDrawer={true}
      handleHideDrawer={handleHideDrawer}
    />
  );

  fireEvent.click(screen.getByRole("button", { name: /close/i }));

  expect(handleHideDrawer).toHaveBeenCalled();
});
