import { useRef} from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';

import Input from '../Input';
import { Modal } from '../Modal';
import { FormHandles } from '@unform/core';


interface Food {
    
  id: number,
  name: string,
  description: string,
  price: number,
  available: boolean,
  image: string

}
interface ChildProps {
  handleAddFood:(data:Food) => void,
  isOpen:boolean,
  setIsOpen: () => void
}
export function ModalAddFood ({handleAddFood,isOpen,setIsOpen}:ChildProps){
 
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data:Food){
    
    handleAddFood(data);
    setIsOpen();
  };


    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" icon="" placeholder="Cole o link aqui" />

          <Input name="name" icon=""placeholder="Ex: Moda Italiana" />
          <Input name="price" icon="" placeholder="Ex: 19.90" />

          <Input name="description" icon="" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  
};

export default ModalAddFood;
