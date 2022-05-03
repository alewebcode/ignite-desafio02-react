import { useRef, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal} from '../Modal';
import Input from '../Input';
import { FormHandles } from '@unform/core';
//import Food from '../Food';


interface Food {
    
  id: number,
  name: string,
  description: string,
  price: number,
  available: boolean,
  image: string

}


interface EditProps {
  isOpen:boolean,
  handleUpdateFood:(data:Food) => void,
  editingFood:Food,
  setIsOpen: () => void
}

export function ModalEditFood ({handleUpdateFood,editingFood,setIsOpen,isOpen}:EditProps) {
  const formRef = useRef<FormHandles>(null);


  async function handleSubmit(data:Food){

   
    handleUpdateFood(data);
    setIsOpen();
  };


    //const { isOpen, setIsOpen, editingFood } = this.props;

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
         
          <Input name="image" icon="" placeholder="Cole o link aqui" />

          <Input name="name"  icon="" placeholder="Ex: Moda Italiana" />
          <Input name="price"  icon=""  placeholder="Ex: 19.90" />

          <Input name="description" icon=""  placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  
};

