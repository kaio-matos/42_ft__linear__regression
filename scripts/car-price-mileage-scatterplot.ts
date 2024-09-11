import * as d3 from "d3";
import path from "path";
import { generateGraph, readDataset } from "./helper";
import { z } from "zod";

generateGraph(path.basename(__filename, ".ts"), async () => {
  const width = 640;
  const height = 400;
  const marginTop = 20;
  const marginRight = 40;
  const marginBottom = 30;
  const marginLeft = 60;

  const data = await readDataset(
    "data.csv",
    z.object({
      km: z.string().transform((arg) => Number(arg)),
      price: z.string().transform((arg) => Number(arg)),
    }),
  );

  // Declare the x (horizontal position) scale.
  const x = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d.km).map((n) => n ?? 0))
    .range([marginLeft, width - marginRight]);

  // Declare the y (vertical position) scale.
  const y = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d.price).map((n) => n ?? 0))
    .range([height - marginBottom, marginTop]);

  // Create the SVG container.
  const svg = d3.create("svg").attr("width", width).attr("height", height);

  svg
    .append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "pink");

  // Add the x-axis.
  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

  // Add the y-axis.
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

  // append label
  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x).ticks(width / 80))
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .selectAll(".tick line")
        .clone()
        .attr("y2", -height)
        .attr("stroke-opacity", 0.1),
    )
    .call((g) =>
      g
        .append("text")
        .attr("x", width - 4)
        .attr("y", -4)
        .attr("font-weight", "bold")
        .attr("text-anchor", "end")
        .attr("fill", "currentColor")
        .text("KM"),
    );

  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    // .call(d3.axisLeft(y).ticks(null, "$.2f"))
    .call(d3.axisLeft(y))
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .selectAll(".tick line")
        .clone()
        .attr("x2", width)
        .attr("stroke-opacity", 0.1),
    )
    .call((g) =>
      g
        .select(".tick:last-of-type text")
        .clone()
        .attr("x", 4)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text("Price"),
    );

  // const color = d3
  //   .scaleOrdinal(["red", "green", "blue"])
  //   .domain(data.map((d) => d[2]))
  //   .range(d3.schemeCategory10);

  const c = d3.color("steelblue");
  svg
    .append("g")
    .attr("fill", "white")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", (d) => x(d.km))
    .attr("cy", (d) => y(d.price))
    .attr("r", 3);

  return svg.node();
});
