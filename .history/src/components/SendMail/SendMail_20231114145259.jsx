import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const SendMailWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 50px;
  background-color: #404040;
  width: 40%;
  max-width: 500px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;

const SendMailHeader = styled.div`
  padding: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  columns: gray;
`;

const HeaderText = styled.h3`
  color: whitesmoke;
  font-size: 13px;
`;

const SendMailForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const SendMailError = styled.p`
  background-color: white;
  color: red;
  text-align: right;
  padding: 2px;
`;

const InputField = styled.input`
  height: 30px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid whitesmoke;
  outline: none;
`;

const MessageInput = styled.input`
  height: 200px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid whitesmoke;
  outline: none;
`;

const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    addDoc(collection(db, "email"), {});
  };

  return (
    <SendMailWrapper>
      <SendMailHeader>
        <HeaderText>New Message</HeaderText>
        <Close onClick={() => dispatch(closeSendMessage())} />
      </SendMailHeader>

      <SendMailForm onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type="email"
          name="to"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <SendMailError>To is required</SendMailError>}

        <InputField
          type="text"
          name="subject"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />

        {errors.subject && <SendMailError>Subject is required</SendMailError>}

        <MessageInput
          type="text"
          name="message"
          placeholder="Message..."
          {...register("message", { required: true })}
        />

        {errors.message && <SendMailError>Message is required</SendMailError>}

        <div>
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </div>
      </SendMailForm>
    </SendMailWrapper>
  );
};

export default SendMail;
