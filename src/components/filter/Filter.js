import React from "react";
import "./Filter.scss";
import { StarOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";

const Filter = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="filter">
      <h4>Otel sınıfı</h4>
      <div className="starButton">
        <Button>
          <p>0-1</p>
          <StarOutlined />
        </Button>
        <Button>
          <p>2</p>
          <StarOutlined />
        </Button>
        <Button>
          <p>3</p>
          <StarOutlined />
        </Button>
        <Button>
          <p>4</p>
          <StarOutlined />
        </Button>
        <Button>
          <p>5</p>
          <StarOutlined />
        </Button>
      </div>
      <h4>Popüler filtreler</h4>
      <div className="filtrechexbox">
        <ul>
          <li>
            <Checkbox onChange={onChange}>Ücretsiz İptal</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Her Şey Dahil</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Wifi</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Klima</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Evcil hayvan kabul edilir</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Otelde öde</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Spa</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Tekerlekli sandalyeye uygun</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Yarım pansiyon</Checkbox>
          </li>
        </ul>
        <ul>
          <li>
            <Checkbox onChange={onChange}>Kahvaltı dâhil</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Havuz</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Otopark</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Restorant</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Aileler</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Jakuzi</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Fitness</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Mükkemmel Değer</Checkbox>
          </li>
          <li>
            <Checkbox onChange={onChange}>Tam Pansiyon</Checkbox>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
