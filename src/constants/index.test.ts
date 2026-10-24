import { GAME_MODES } from "@/src/constants";

describe("GAME_MODES", () => {
  it("lists the three game modes in order", () => {
    expect(GAME_MODES.map((m) => m.mode)).toEqual(["vsPlayer", "vsComputer", "liveMatch"]);
  });

  it("has unique modes", () => {
    const modes = GAME_MODES.map((m) => m.mode);

    expect(new Set(modes).size).toBe(modes.length);
  });

  it("gives every mode a title, description and icon", () => {
    for (const entry of GAME_MODES) {
      expect(entry.title).not.toBe("");
      expect(entry.description).not.toBe("");
      expect(entry.icon).not.toBe("");
    }
  });

  it("only allows local multiplayer without signing in", () => {
    const open = GAME_MODES.filter((m) => !m.requiresAuth).map((m) => m.mode);

    expect(open).toEqual(["vsPlayer"]);
  });
});
