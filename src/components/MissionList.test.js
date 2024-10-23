import MissionsList from "./MissionsList"
import { render, screen } from "@testing-library/react"
import React from "react"

const missions = []

test('missions list shows data when rerender with new missions data', () => {
    const{ rerender } = render(<MissionsList errors="" missions = {[]}/>)
    let missionsObjects = screen.queryAllByTestId('mission')
    expect(missionsObjects).toHaveLength(0);

    rerender(<MissionsList errors="" missions = {missions}/>)
    missionsObjects = screen.queryAllByTestId('mission')
    expect(missionsObjects).toHaveLength(2);
})