import { useGlobalModal } from "@/src/stores/globalModalStore";

describe("useGlobalModal", () => {
  beforeEach(() => {
    useGlobalModal.setState({ activeModal: null });
  });

  it("starts with no active modal", () => {
    expect(useGlobalModal.getState().activeModal).toBeNull();
  });

  it("opens a modal", () => {
    useGlobalModal.getState().openModal("profile");

    expect(useGlobalModal.getState().activeModal).toBe("profile");
  });

  it("replaces the active modal when another one is opened", () => {
    const { openModal } = useGlobalModal.getState();

    openModal("tutorial");
    openModal("winner");

    expect(useGlobalModal.getState().activeModal).toBe("winner");
  });

  it("closes the active modal", () => {
    const { openModal, closeModal } = useGlobalModal.getState();

    openModal("boardConfig");
    closeModal();

    expect(useGlobalModal.getState().activeModal).toBeNull();
  });

  it("closing with no active modal keeps the state empty", () => {
    useGlobalModal.getState().closeModal();

    expect(useGlobalModal.getState().activeModal).toBeNull();
  });
});
