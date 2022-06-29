import React, { useState } from "react";
import Grid from "../grid";
import {
  Container,
  InputContent,
  Label,
  Input,
  RadiusGroup,
  Button,
} from "./style";

const Forms = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <>
      <Container>
        <InputContent>
          <Label>Descrição</Label>
          <Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </InputContent>
        <InputContent>
          <Label>Valor</Label>
          <Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </InputContent>
        <RadiusGroup>
          <Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <Label htmlFor="rIncome">Entrada</Label>
          <Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <Label htmlFor="rExpenses">Saída</Label>
        </RadiusGroup>
        <Button onClick={handleSave}>ADICIONAR</Button>
      </Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Forms;
