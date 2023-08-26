import { Box, Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

import { useAppDispatch, useAppSelector } from "../../../../store";
import { setParams } from "../../slice";

export const AmountInput = () => {
  const MIN = 1;
  const MAX = 25;
  const STEP = 1;

  const params = useAppSelector((state) => state.quiz.params);
  const dispatch = useAppDispatch();

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    value: params.amount,
    min: MIN,
    max: MAX,
    step: STEP,
    precision: 0,
    inputMode: "numeric",
  });

  const increment = () => {
    if (params.amount < MAX) {
      dispatch(
        setParams({
          ...params,
          amount: params.amount + 1,
        }),
      );
    }
  };

  const decrement = () => {
    if (params.amount > MIN) {
      dispatch(
        setParams({
          ...params,
          amount: params.amount - 1,
        }),
      );
    }
  };

  return (
    <Box>
      <label htmlFor="quiz-length">Number of questions:</label>
      <HStack>
        <Button {...getIncrementButtonProps()} onClick={increment} fontSize={24}>
          +
        </Button>
        <Input
          {...getInputProps()}
          id="quiz-length"
          value={params.amount}
          fontSize={24}
          w={50}
          fontWeight="bold"
          textAlign="center"
          variant="unstyled"
        />
        <Button {...getDecrementButtonProps()} onClick={decrement} fontSize={24}>
          -
        </Button>
      </HStack>
    </Box>
  );
};
