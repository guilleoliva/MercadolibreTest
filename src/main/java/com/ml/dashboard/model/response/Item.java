package com.ml.dashboard.model.response;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import com.google.gson.annotations.SerializedName;
@Entity
@Table(name="Mercadolibre_DB")
public class Item {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@SerializedName("id")
	@Column(name = "item_id")
    private String item_id;

	@Column(name = "title")
    private String title;

	@Column(name = "category_id")
	private String category_id;

	@Column(name = "price")
    private double price;

	@Column(name = "start_time")
	private String start_time;

	@Column(name = "stop_time")
	private String stop_time;
    
    private List<ItemChildren> children = new ArrayList<ItemChildren>();
    
    public Item() {
	}
    
	public String getItem_id() {
		return item_id;
	}
	public void setItem_id(String item_id) {
		this.item_id = item_id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCategory_id() {
		return category_id;
	}
	public void setCategory_id(String category_id) {
		this.category_id = category_id;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getStart_time() {
		return start_time;
	}
	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}
	public String getStop_time() {
		return stop_time;
	}
	public void setStop_time(String stop_time) {
		this.stop_time = stop_time;
	}

	public List<ItemChildren> getChildren() {
		return children;
	}

	public void setChildren(List<ItemChildren> children) {
		this.children = children;
	}
    
}
