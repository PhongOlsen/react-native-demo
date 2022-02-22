import React, { memo, useCallback, useContext, useMemo, useState } from "react";
import { Text, View, Button } from "react-native";
import { DemoContext } from "../../contexts/DemoContext";
import useSearchProduct from "../../hooks/useSearchProduct";

export function Demo({ handleDemo }) {
  console.log("La Thanh Phong");
  return (
    <View>
      <Button onPress={handleDemo} title="Hanh Nguyen" />
    </View>
  );
}
export const DemoMemo = memo(Demo);

export function Demo2({ handleDemo }) {
  console.log("Mai Linh");
  return (
    <View>
      <Button onPress={handleDemo} title="Demo2" />
    </View>
  );
}

// useMemo useCallBack luon luon duoc di theo vs react.memo

export default function Message() {
  const { demo } = useContext(DemoContext);
  const [term, setTerm] = useState("");
  const [limit, setLimit] = useState(20);

  const dataList = useSearchProduct(term, limit);

  const handleClick = useCallback(() => {
    // setLimit(limit + 1);
    alert(1);
  }, []);

  const handleDemo = () => {
    alert(1);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Custom Hook={dataList.length}</Text>
      <Text>Context={demo.length}</Text>
      <Button
        onPress={() => setLimit(limit + 1)}
        title="Increase Limit"
        color="#841584"
      />
      <View>
        <Button
          onPress={() => setLimit(limit - 1)}
          title="Decrease Limit"
          color="#841584"
        />
      </View>
      <View>
        <Button onPress={handleClick} title="DemoTest" color="#841584" />
      </View>
      {/* <DemoMemo handleDemo={handleClick} /> */}
      {/* <Demo2 handleDemo={handleClick} /> */}
    </View>
  );
}
