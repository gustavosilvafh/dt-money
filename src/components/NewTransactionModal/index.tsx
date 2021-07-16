import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isNewTransactionModalOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal isOpen={isNewTransactionModalOpen} onRequestClose={onRequestClose}>
      <h2>Cadastrar transações</h2>
    </Modal>
  );
}
