import { Button, HStack, Input } from "@chakra-ui/react"
import { useNumberInput } from "@mui/base/unstable_useNumberInput/useNumberInput"
function NumberInputQuatity() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 99,
    })
  const dec = getDecrementButtonProps()
  const inc = getIncrementButtonProps()

  const input = getInputProps()

  return (
    <>
      <HStack maxW='150px'>
        <Button {...dec}>-</Button>
        <Input {...input} />
        <Button {...inc}>+</Button>
      </HStack>
    </>
  )
}

export default NumberInputQuatity
