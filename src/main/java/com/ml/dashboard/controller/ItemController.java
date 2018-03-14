package com.ml.dashboard.controller;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.config.Task;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.mercadolibre.sdk.Meli;
import com.ml.dashboard.model.response.Item;
import com.ml.dashboard.model.response.ItemChildren;
import com.ning.http.client.FluentStringsMap;
import com.ning.http.client.Response;
import javax.persistence.*;

@RestController
@RequestMapping("/items")
public class ItemController {

	private Meli m = new Meli(5332832442388805L, "6eA4YKNxYZv3aIxEF258zSpAahI9hjaj");

	@Autowired
	Properties authJwtProperties;

	@GetMapping(value = "/{itemId}")
	public ResponseEntity<Item> getItem(@PathVariable("itemId") String itemId) throws Exception {

		Response response = m.get("/items/" + itemId , new FluentStringsMap());

		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").create();
		Item item = gson.fromJson(response.getResponseBody(), Item.class);

		return new ResponseEntity<Item>(item, HttpStatus.OK);
	}

	@GetMapping(value = "/{itemId}/children")
	public ResponseEntity<Item> getItemChildren(@PathVariable("itemId") String itemId) throws Exception {

		Response itemRsp = m.get("/items/" + itemId, new FluentStringsMap());

		Response childrenResp = m.get("/items/" + itemId + "/children", new FluentStringsMap());

		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").create();
		Item item = gson.fromJson(itemRsp.getResponseBody(), Item.class);

		Type listType = new TypeToken<ArrayList<ItemChildren>>() {
		}.getType();
		List<ItemChildren> children = gson.fromJson(childrenResp.getResponseBody(), listType);
		item.setChildren(children);

		return new ResponseEntity<Item>(item, HttpStatus.OK);
	}

}
