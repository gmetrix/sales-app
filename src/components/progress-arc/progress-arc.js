import React, { Component } from 'react';
import * as d3 from 'd3';

class ProgressArc extends Component {

    field = null;

    componentDidMount() {
        const context = this.setContext();
        this.field = this.createGraphs(context, this.randDataGenerator());
        //d3.transition().duration(1750).each(this.update().bind(this));
        //this.setBackground(context);
        //this.setForeground(context);
    }

    createGraphs(context,randData) {
         const field = context.selectAll('g')
            .data(randData)
            .enter()
            .append('g');
        field.append("path").attr("class", "progress")

        this.setBackground(field);
        return this.setForeground(field);

    }

    randDataGenerator(){
        const ran = Math.random();
        return    [
            {index: 0, name: 'move', icon: "\uF105", percentage: ran * 60 + 30},
            {index: 1, name: 'exercise', icon: "\uF101", percentage: ran * 60 + 30},
            {index: 2, name: 'stand', icon: "\uF106", percentage: ran * 60 + 30}
        ];
    }
    setContext() {
        return d3.select(this.refs.arc).append('svg')
            .attr('height', '400px')
            .attr('width', '400px')
            .attr('id', 'd3-arc')
            .append('g')
            .attr('transform', `translate(200, 200)`);
    }

    addShadow(context) {
        return context.append('defs')
    }
    setBackground(context) {
        return context.append('path')
            .style('fill', (d) => this.colors[d.index])
            .style('opacity', 0.2)
            .attr('d', this.arcBackground().bind(this));
    }

    setForeground(context) {
        return context.append('path')
            //.datum({ endAngle: this.tau * 0.3 })
            .style('fill', (d) => {
                return this.colors[d.index];
            })
            .attr('d', this.arcForeGround().bind(this));
    }

    arcBackground() {
        return d3.arc()
            .startAngle(0)
            .endAngle(this.tau)
            .innerRadius(function (d, i) {
                return 130 - d.index * (40 + this.gap)
            })
            .outerRadius(function (d, i) {
                return 170 - d.index * (40 + this.gap)
            });
    }
    arcForeGround() {
        return d3.arc()
        .startAngle(0)
        .endAngle(function (d) {
            return d.percentage / 100 * this.tau;
        })
        .innerRadius(function (d) {
            return 130 - d.index * (40 + this.gap)
        })
        .outerRadius(function (d) {
            return 170 - d.index * (40 + this.gap)
        })
        .cornerRadius(20);
    }
    colors = ["#e90b3a", "#a0ff03", "#1ad5de"];
    tau = Math.PI * 2;
    width = 500;
    height = 500;
    gap = 2;

   /* update(){
        this.field = this.field
            .each(function (d) {
                this._value = d.percentage;
            })
            //.data(dataset)
            .each(function (d) {
                d.previousValue = this._value;
            });
    }*/


    render() {
        return (
            <div ref="arc"></div>
        );
    }
}

export default ProgressArc