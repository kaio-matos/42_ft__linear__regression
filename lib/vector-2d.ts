export class Vector2D extends Array<number> {
  static create(elements: number[] = [], length?: number) {
    const v = length === undefined ? new Vector2D() : new Vector2D(length);
    v.push(...elements);
    return v;
  }

  add(other: Vector2D): Vector2D {
    return Vector2D.create(this.map((e, i) => e + other[i]));
  }

  sub(other: Vector2D): Vector2D {
    return Vector2D.create(this.map((e, i) => e - other[i]));
  }
}
