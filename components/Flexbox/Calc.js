import { View, StyleSheet } from "react-native";
import ButtonLine from "./ButtonLine";

export default function Calc(props) {
  // 　ボタンの配置を定義
  const buttons = [
    [
      { value: "AC", buttonEvent: () => onpressAllClear(), flex: 2 },
      { value: "C", buttonEvent: () => onpressClear() },
      { value: "+", buttonEvent: () => inputOperation("+") },
    ],
    [
      {
        value: 7,
        buttonEvent: () => inputNumber(7),
      },
      { value: 8, buttonEvent: () => inputNumber(8) },
      { value: 9, buttonEvent: () => inputNumber(9) },
      { value: "-", buttonEvent: () => inputOperation("-") },
    ],
    [
      { value: 4, buttonEvent: () => inputNumber(4) },
      { value: 5, buttonEvent: () => inputNumber(5) },
      { value: 6, buttonEvent: () => inputNumber(6) },
      { value: "×", buttonEvent: () => inputOperation("×") },
    ],
    [
      { value: 1, buttonEvent: () => inputNumber(1) },
      { value: 2, buttonEvent: () => inputNumber(2) },
      { value: 3, buttonEvent: () => inputNumber(3) },
    ],
    [
      { value: 0, buttonEvent: () => inputNumber(0) },
      { value: ".", buttonEvent: () => inputDecimalPoint() },
      { value: "÷", buttonEvent: () => inputOperation("÷") },
    ],
    [{ value: "=", buttonEvent: () => onpressEqual() }],
  ];

  // 数値を入力する関数
  const inputNumber = (value) => {
    // 配列に要素がないとき
    if (props.formula.length === 0) {
      return props.setFormula([value]);
    }

    // 入力値が0のとき
    if (value === 0) {
      // 配列の要素が0だけの場合
      if (
        props.formula[props.formula.length - 1] === 0 &&
        props.formula.length === 1
      ) {
        return;
      }
      // 式の最後の入力値が整数の0の場合
      if (
        props.formula[props.formula.length - 1] === 0 &&
        props.formula[props.formula.length - 2] !== "."
      ) {
        return;
      }
      // 式の最後の入力値が演算子または小数点の場合
      if (isNaN(Number(props.formula[props.formula.length - 1]))) {
        return props.setFormula([...props.formula, value]);
      }
      props.setFormula([
        ...props.formula.slice(0, -1),
        String(props.formula[props.formula.length - 1]) + value,
      ]);
    } else {
      // 入力値が0以外
      // 式の入力値が0だけの場合
      if (
        props.formula[props.formula.length - 1] === 0 &&
        props.formula.length === 1
      ) {
        return props.setFormula([value]);
      }
      // 式の最後の入力値が整数の0の場合
      if (
        props.formula[props.formula.length - 1] === 0 &&
        props.formula[props.formula.length - 2] !== "."
      ) {
        return props.setFormula([...props.formula.slice(0, -1), value]);
      }
      // 式の最後の入力値が演算子または小数点の場合
      if (isNaN(Number(props.formula[props.formula.length - 1]))) {
        return props.setFormula([...props.formula, value]);
      }
      props.setFormula([
        ...props.formula.slice(0, -1),
        String(props.formula[props.formula.length - 1]) + value,
      ]);
    }
  };

  // 演算子を入力する関数
  const inputOperation = (value) => {
    if (props.formula.length === 0) {
      return props.setFormula([0, value]);
    }
    if (isNaN(Number(props.formula[props.formula.length - 1]))) {
      return props.setFormula([...props.formula.slice(0, -1), value]);
    }
    props.setFormula([...props.formula, value]);
  };

  // 小数点を入力する関数
  const inputDecimalPoint = () => {
    // 配列に要素がないとき
    if (props.formula.length === 0) {
      return props.setFormula([0, "."]);
    }
    // 配列の末尾要素が数値以外のとき
    if (isNaN(Number(props.formula[props.formula.length - 1]))) {
      if (props.formula[props.formula.length - 3] === ".") {
        return;
      }
      return props.setFormula([...props.formula.slice(0, -1), "."]);
    }
    if (
      props.formula.length > 2 &&
      props.formula[props.formula.length - 2] === "."
    ) {
      return;
    }
    props.setFormula([...props.formula, "."]);
  };

  // 計算処理を行う関数
  const onpressEqual = () => {
    let formulaInRPN = [];
    let stack = [];
    let formula = [];

    for (let i = 0; i < props.formula.length; i++) {
      let addValue = props.formula[i];
      if (
        props.formula[i] === "." ||
        String(props.formula[i - 1]).includes(".")
      ) {
        addValue = formula.pop() + props.formula[i];
      }
      if (formula.length === 0) {
        formula = [addValue];
      } else {
        formula = [...formula, addValue];
      }
      // props.setFormula([...formula])
    }
    // 乗算と除算記号を逆ポーランド記法に変換
    for (let i = 0; i < formula.length; i++) {
      switch (formula[i]) {
        case "+":
        case "-":
          if (stack.length > 0) {
            for (let j = 0; j < stack.length; j++) {
              formulaInRPN.push(stack.pop());
            }
          }
          stack.push(formula[i]);
          break;
        case "×":
        case "÷":
          if (
            stack[stack.length - 1] == "×" ||
            stack[stack.length - 1] == "÷"
          ) {
            formulaInRPN.push(stack.pop());
          }
          stack.push(formula[i]);
          break;
        default:
          formulaInRPN.push(formula[i]);
      }
    }
    while (stack.length > 0) {
      formulaInRPN.push(stack.pop());
    }
    // ポーランド記法になっているか確認のため
    // props.setFormula([...formulaInRPN]);

    // 計算機能

    formulaInRPN.forEach((value) => {
      switch (value) {
        case "+":
          const addNum = Number(stack.pop());
          const addedNum = Number(stack.pop());
          stack.push(addedNum + addNum);
          break;
        case "-":
          const subtractNum = Number(stack.pop());
          const subtractedNum = Number(stack.pop());
          stack.push(subtractedNum - subtractNum);
          break;
        case "×":
          const multiplyNum = Number(stack.pop());
          const multipliedNum = Number(stack.pop());
          stack.push(multipliedNum * multiplyNum);
          break;
        case "÷":
          const divideNum = Number(stack.pop());
          const dividedNum = Number(stack.pop());
          stack.push(dividedNum / divideNum);
          break;
        default:
          stack.push(value);
          break;
      }
    });
    props.setResult(stack[0]);
  };

  // 入力値をクリアする関数
  const onpressClear = () => {
    if (!isNaN(Number(props.formula[props.formula.length - 1]))) {
      return props.setFormula([...props.formula.slice(0, -1)]);
    }
    if (props.formula[props.formula.length - 1] === ".") {
      return props.setFormula([...props.formula.slice(0, -1)]);
    }
  };

  // 最初からやり直す関数
  const onpressAllClear = () => {
    props.setFormula([]);
    // props.setResult(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonLine}>
        <ButtonLine buttons={buttons[0]} />
      </View>
      <View style={styles.buttonLine}>
        <ButtonLine buttons={buttons[1]} />
      </View>
      <View style={styles.buttonLine}>
        <ButtonLine buttons={buttons[2]} />
      </View>

      <View style={styles.buttonLineBottom2}>
        <View style={styles.button1to0}>
          <View style={styles.buttonLine}>
            <ButtonLine buttons={buttons[3]} />
          </View>
          <View style={styles.buttonLine}>
            <ButtonLine buttons={buttons[4]} />
          </View>
        </View>
        <View style={styles.equalButton}>
          <ButtonLine buttons={buttons[5]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#84b9cb",
  },
  buttonLineBottom2: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  buttonLine: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "stretch",
    flexDirection: "row",
    // borderColor: "black",
  },
  equalButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  button1to0: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
});

/** 
    [          ]
    [          ]
    [          ]
    [ AC ][C][+]
    [7][8][9][-]
    [4][5][6][*]
    [1][2][3][=]
    [0][.][/][=]
*/
