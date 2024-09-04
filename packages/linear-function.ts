/**
 * @link https://en.wikipedia.org/wiki/Linear_function
 */

import { Vector2D } from "@packages/vector-2d";

// f(x) = ax + b
export class PolymonialLinearFunction {
  /*
    In calculus, analytic geometry and related areas,
    a linear function is a polynomial of degree one or less
  */

  private __slope = 0;
  private __intercept = 0;

  static create() {
    return new PolymonialLinearFunction();
  }

  slope(a: number) {
    this.__slope = a;
    return this;
  }

  intercept(b: number) {
    this.__intercept = b;
    return this;
  }

  generate(x: number) {
    return this.__intercept + this.__slope * x;
  }
}

type LinearMapComponentTransformer = (x: number, y: number) => number;
export class LinearMapLinearFunction {
  /*
    In linear algebra, a linear function is a map `f` between
    two vector spaces
  */
  private __xTransformer: LinearMapComponentTransformer = (x, y) => x;
  private __yTransfomer: LinearMapComponentTransformer = (x, y) => y;

  static create() {
    return new LinearMapLinearFunction();
  }

  xTransformer(x: LinearMapComponentTransformer) {
    this.__xTransformer = x;
    return this;
  }

  yTransformer(y: LinearMapComponentTransformer) {
    this.__yTransfomer = y;
    return this;
  }

  generate(v: Vector2D) {
    const result = Vector2D.create();
    result.push(
      this.__xTransformer(v[0], v[1]),
      this.__yTransfomer(v[0], v[1]),
    );

    return result;
  }
}
